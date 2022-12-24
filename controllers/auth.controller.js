import { request, response } from "express";
import {User} from "../models/index.js";
import { checkPassword, generateJWT, randomPassword } from "../helpers/utils.js";
import { googleVerify } from "../helpers/googleVerify.js";
import { INVALID_USER, SOMETHING_WENT_WRONG, GOOGLE_TOKEN_COULD_NOT_VERIFY, USER_UNAUTHORIZE } from "../constant/messages.constant.js";

export const loginPost = async (req = request, res = response) => {
  const {body} = req;
  const {email, password} = body;

  try {
    const user = await User.findOne({email, status: true}).exec();

    if (!user || !checkPassword(password, user.password)) {
        return res.json({
            msg: INVALID_USER
        });
    }

    const token = await generateJWT(user.id);

    return res.json({
        user,
        token
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
        msg: SOMETHING_WENT_WRONG
    });
  }
};


export const googleSignInPost = async (req = request, res = response) => {
    const {body} = req;
    const {id_token} = body;

    try {
        const {name, picture, email} = await googleVerify(id_token);

        let user = await User.findOne({email}).exec();

        if (!user) {
            const data = {
                name,
                email,
                password: randomPassword(),
                image: picture,
                google: true
            }

            user = new User(data);

            await user.save();
        }

        if (!user.status) {
            return res.status(401).json({
                msg: USER_UNAUTHORIZE
            });
        }

        const token = generateJWT(user.id);

        return res.json({
            token,
            user,
        });
    } catch (error) {
        return res.status(400).json({
            msg: GOOGLE_TOKEN_COULD_NOT_VERIFY
        });
    }
  };