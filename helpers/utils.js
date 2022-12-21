import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken'

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
                reject('Something went wrong in generating JWT');
            } else {
                resolve(token);
            }
        };

        jwt.sign(payload, process.env.SECRET_PRIVATE_KEY, {
            expiresIn: '4h'
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