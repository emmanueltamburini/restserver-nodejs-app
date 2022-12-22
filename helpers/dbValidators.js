import { EMAIL_TAKEN, INVALID_ROLE, USER_ID_DOES_NOT_EXIST } from "../constant/messages.constant.js";
import {Role, User} from "../models/index.js";

export const validRole = async (role = '') => {
    const existRole = await Role.findOne({role});
    if (!existRole) {
        throw new Error(INVALID_ROLE(role));
    }
}

export const validEmail = async (email = '') => {
    const existUser = await User.findOne({email});
    if (existUser) {
        throw new Error(EMAIL_TAKEN(email));
    }
}

export const validId = async (id = '') => {
    const existUser = await User.findById(id);
    if (!existUser) {
        throw new Error(USER_ID_DOES_NOT_EXIST(ID));
    }
}