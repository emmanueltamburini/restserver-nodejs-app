import { request, response } from "express";

export const validateRoles = (...roles) => {
    return (req = request, res = response, next = () => {}) => {
        if (!req.user) {
            return res.status(500).json('There is not user to validate role');
        }
    
        const {name, role} = req.user;
    
        if (role !== 'ADMIN_ROLE') {
            return res.status(500).json(`${name} has not permission to do this`);
        }
    
        next();
    }
}
