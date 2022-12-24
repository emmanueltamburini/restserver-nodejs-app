import { v4 as uuidv4 } from 'uuid';

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
