import { request, response } from "express";
import { NOT_PERMISSION_TO_THIS, NOT_USER_TO_VALIDATE } from "../constant/messages.constant.js";

export const validateRoles = (...roles) => {
    return (req = request, res = response, next = () => {}) => {
        if (!req.user) {
            return res.status(500).json(NOT_USER_TO_VALIDATE);
        }
    
        const {name, role} = req.user;
    
        if (!roles.includes(role)) {
            return res.status(500).json(NOT_PERMISSION_TO_THIS(name));
        }
    
        next();
    }
}
