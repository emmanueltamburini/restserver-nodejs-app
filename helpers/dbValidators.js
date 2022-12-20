import Role from "../models/role.js";
import User from "../models/user.js";

export const validRole = async (role = '') => {
    const existRole = await Role.findOne({role});
    if (!existRole) {
        throw new Error(`Role ${role} is not valid`);
    }
}

export const validRoleUpdate = async (role = '') => {
    if (role === '') {
        return;
    }
    validRole(role);
}

export const validEmail = async (email = '') => {
    const existUser = await User.findOne({email});
    if (existUser) {
        throw new Error(`Email ${email} is already taken`);
    }
}

export const validId = async (id = '') => {
    const existUser = await User.findById(id);
    if (!existUser) {
        throw new Error(`User with id ${id} does not exits`);
    }
}