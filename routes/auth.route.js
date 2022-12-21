import { Router } from "express";
import { loginPost } from "../controllers/auth.controller.js";
import { check } from "express-validator";
import { validateFields } from "../middleware/validateFields.middleware.js";

const authRouter = Router();

authRouter.post("/login", [
    check('email', 'Email is required').not().isEmpty(),
    check('email', 'Email must have right format').isEmail(),
    check('password', 'Password is required').not().isEmpty(),
    validateFields
], loginPost);

export default authRouter;
