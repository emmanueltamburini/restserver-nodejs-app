import { Router } from "express";
import { check } from "express-validator";

import { googleSignInPost, loginPost } from "../controllers/auth.controller.js";
import { validateFields } from "../middleware/validateFields.middleware.js";
import { EMAIL, ID_TOKEN, PASSWORD } from "../constant/paramsQueries.constant.js";
import { IS_REQUIRED, MUST_HAVE_RIGHT_FORMAT } from "../constant/messages.constant.js";
import { GOOGLE_PATH, LOGIN_PATH } from "../constant/routes.constant.js";

const authRouter = Router();

authRouter.post(LOGIN_PATH, [
    check(EMAIL, IS_REQUIRED(EMAIL)).not().isEmpty(),
    check(EMAIL, MUST_HAVE_RIGHT_FORMAT(EMAIL)).isEmail(),
    check(PASSWORD, IS_REQUIRED(PASSWORD)).not().isEmpty(),
    validateFields
], loginPost);

authRouter.post(GOOGLE_PATH, [
    check(ID_TOKEN, IS_REQUIRED(ID_TOKEN)).not().isEmpty(),
    validateFields
], googleSignInPost);

export default authRouter;
