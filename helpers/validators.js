import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken'

import { EXPIRES_JWT } from "../constant/values.constant.js";
import { AVAILABLE_COLLECTION } from "../constant/paramsQueries.constant.js";
import { INVALID_COLLECTION } from "../constant/messages.constant.js";

export const generatePassword = (password, jumps = 10) => {
    const salt = bcryptjs.genSaltSync(jumps);

    return bcryptjs.hashSync(password, salt);
}

export const checkPassword = (currentPassword, password) => {
    return bcryptjs.compareSync(currentPassword, password);
}

export const generateJWT = (uid = '') => {
    return new Promise((resolve, reject) => {
        const payload = {uid};

        const callback = (err, token) => {
            if (err) {
                console.log(err);
                reject(SOMETHING_WENT_WRONG_JWT);
            } else {
                resolve(token);
            }
        };

        jwt.sign(payload, process.env.SECRET_PRIVATE_KEY, {
            expiresIn: EXPIRES_JWT
        }, callback);
    });
}

export const checkJWT = (token = '') => {
    try {
        return jwt.verify(token, process.env.SECRET_PRIVATE_KEY);
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const validCollectionParam = async (collection = '') => {
    if (!AVAILABLE_COLLECTION.includes(collection)) {
        throw new Error(INVALID_COLLECTION(AVAILABLE_COLLECTION));
    }
}
