import { request, response } from "express";
import User from "../models/user.js";
import { checkPassword, generateJWT } from "../helpers/validators.js";
import { INVALID_USER, SOMETHING_WENT_WRONG } from "../constant/messages.constant.js";

export const loginPost = async (req = request, res = response) => {
  const {body} = req;
  const {email, password} = body;

  try {
    const user = await User.findOne({email, status: true});

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
