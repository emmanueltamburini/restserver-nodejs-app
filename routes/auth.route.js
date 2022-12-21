import { Router } from "express";
import { loginPost } from "../controllers/auth.controller.js";
import { check } from "express-validator";
import { validateFields } from "../middleware/validateFields.middleware.js";
import { EMAIL, PASSWORD } from "../constant/paramsQueries.constant.js";
import { IS_REQUIRED, MUST_HAVE_RIGHT_FORMAT } from "../constant/messages.constant.js";
import { LOGIN_PATH } from "../constant/routes.constant.js";

const authRouter = Router();

authRouter.post(LOGIN_PATH, [
    check(EMAIL, IS_REQUIRED(EMAIL)).not().isEmpty(),
    check(EMAIL, MUST_HAVE_RIGHT_FORMAT(EMAIL)).isEmail(),
    check(PASSWORD, IS_REQUIRED(PASSWORD)).not().isEmpty(),
    validateFields
], loginPost);

export default authRouter;
