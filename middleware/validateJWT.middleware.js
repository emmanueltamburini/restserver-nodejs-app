import { request, response } from "express";
import { checkJWT } from "../helpers/validators.js";

import {User} from "../models/index.js";
import { TOKEN_INVALID, TOKEN_INVALID_USER_NOT_FOUND } from "../constant/messages.constant.js";

export const validateJWT = async (req = request, res = response, next = () => {}) => {
    const token = req.header('x-token');
    const payload = checkJWT(token); 

    if (!payload) {
        return res.status(401).json(TOKEN_INVALID);
    }

    const user = await User.findOne({_id: payload.uid, status: true }).exec();

    if (!user) {
        return res.status(401).json(TOKEN_INVALID_USER_NOT_FOUND);
    }

    req.user = user;

    next();
}
