import { request, response } from "express";
import User from "../models/user.js";
import { checkPassword, generateJWT } from "../helpers/utils.js";

export const loginPost = async (req = request, res = response) => {
  const {body} = req;
  const {email, password} = body;

  try {
    const user = await User.findOne({email, status: true});

    if (!user || !checkPassword(password, user.password)) {
        return res.json({
            msg: 'Invalid username or password'
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
        msg: 'Something went wrong, please contact admin'
    });
  }
};
