import { CATEGORY_ALREADY_EXISTS, CATEGORY_ID_DOES_NOT_EXIST, EMAIL_TAKEN, INVALID_ROLE, USER_ID_DOES_NOT_EXIST } from "../constant/messages.constant.js";
import {Category, Role, User} from "../models/index.js";

export const validRole = async (role = '') => {
    const existRole = await Role.findOne({role}).exec();
    if (!existRole) {
        throw new Error(INVALID_ROLE(role));
    }
}

export const validEmail = async (email = '') => {
    const existUser = await User.findOne({email}).exec();
    if (existUser) {
        throw new Error(EMAIL_TAKEN(email));
    }
}

export const validUserId = async (id = '') => {
    const existUser = await User.findById(id).exec();
    if (!existUser) {
        throw new Error(USER_ID_DOES_NOT_EXIST(id));
    }
}

export const validCategoryId = async (id = '') => {
    const existCategory = await Category.findById(id).exec();
    if (!existCategory) {
        throw new Error(CATEGORY_ID_DOES_NOT_EXIST(id));
    }
}

export const validCategoryName = async (name, {req, loc, path}) => {
    const {id} = req.params;
    name = name.toUpperCase();

    const existCategory = await Category.findOne({ name, _id: {$ne: id} }).exec();
    if (existCategory) {
        throw new Error(CATEGORY_ALREADY_EXISTS(name));
    }
}