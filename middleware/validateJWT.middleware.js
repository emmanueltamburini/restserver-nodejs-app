import { request, response } from "express";
import { checkJWT } from "../helpers/utils.js";
import User from "../models/user.js";

export const validateJWT = async (req = request, res = response, next = () => {}) => {
    const token = req.header('x-token');
    const payload = checkJWT(token); 

    if (!payload) {
        return res.status(401).json('x-token is not valid');
    }

    const user = await User.findOne({_id: payload.uid, status: true });

    if (!user) {
        return res.status(401).json('x-token is not valid - user does not exists');
    }

    req.user = user;

    next();
}
