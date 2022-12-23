import { CATEGORY_ALREADY_TAKEN, CATEGORY_ID_DOES_NOT_EXIST, EMAIL_TAKEN, INVALID_ROLE, PRODUCT_ALREADY_TAKEN, PRODUCT_ID_DOES_NOT_EXIST, USER_ID_DOES_NOT_EXIST } from "../constant/messages.constant.js";
import {Category, Product, Role, User} from "../models/index.js";

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
        throw new Error(CATEGORY_ALREADY_TAKEN(name));
    }
}

export const validProductId = async (id = '') => {
    const existProduct = await Product.findById(id).exec();
    if (!existProduct) {
        throw new Error(PRODUCT_ID_DOES_NOT_EXIST(id));
    }
}

export const validProductName = async (name, {req, loc, path}) => {
    const {id} = req.params;
    name = name.toUpperCase();

    const existProduct = await Product.findOne({ name, _id: {$ne: id} }).exec();
    if (existProduct) {
        throw new Error(PRODUCT_ALREADY_TAKEN(name));
    }
}