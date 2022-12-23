import { ELEMENT_TAKEN, ELEMENT_ID_DOES_NOT_EXIST, INVALID_ROLE } from "../constant/messages.constant.js";
import { CATEGORY, EMAIL, PRODUCT, USER } from "../constant/paramsQueries.constant.js";
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
        throw new Error(ELEMENT_TAKEN(email, EMAIL));
    }
}

export const validUserId = async (id = '') => {
    const existUser = await User.findById(id).exec();
    if (!existUser) {
        throw new Error(ELEMENT_ID_DOES_NOT_EXIST(id, USER));
    }
}

export const validCategoryId = async (id = '') => {
    const existCategory = await Category.findById(id).exec();
    if (!existCategory) {
        throw new Error(ELEMENT_ID_DOES_NOT_EXIST(id, CATEGORY));
    }
}

export const validCategoryName = async (name, {req, loc, path}) => {
    const {id} = req.params;
    name = name.toUpperCase();

    const existCategory = await Category.findOne({ name, _id: {$ne: id} }).exec();
    if (existCategory) {
        throw new Error(ELEMENT_TAKEN(name, CATEGORY));
    }
}

export const validProductId = async (id = '') => {
    const existProduct = await Product.findById(id).exec();
    if (!existProduct) {
        throw new Error(ELEMENT_ID_DOES_NOT_EXIST(PRODUCT));
    }
}

export const validProductName = async (name, {req, loc, path}) => {
    const {id} = req.params;
    name = name.toUpperCase();

    const existProduct = await Product.findOne({ name, _id: {$ne: id} }).exec();
    if (existProduct) {
        throw new Error(ELEMENT_TAKEN(name, PRODUCT));
    }
}