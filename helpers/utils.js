import { v4 as uuidv4 } from 'uuid';
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken'

import { EXPIRES_JWT } from "../constant/values.constant.js";

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

export const capitalize = (value = '') => {
    return value.replace(/^\w/, (c) => c.toUpperCase());    
}

export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const generateRandomString = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export const randomPassword = () => generateRandomString(getRandomInt(10, 15));

export const generateNameFile = (ext = 'txt') => `${uuidv4()}.${ext}`
