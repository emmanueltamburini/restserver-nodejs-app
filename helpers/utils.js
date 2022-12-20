import bcryptjs from "bcryptjs";

export const generatePassword = (password, jumps = 10) => {
    const salt = bcryptjs.genSaltSync(jumps);

    return bcryptjs.hashSync(password, salt);
}