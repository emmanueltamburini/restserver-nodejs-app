import { Router } from "express";
import { check, query } from "express-validator";

import {
  userDelete,
  userGet,
  userPost,
  userPut,
} from "../controllers/user.controller.js";
import { validateFields, validateJWT, validateRoles } from "../middleware/index.js";
import { validEmail, validUserId, validRole } from "../helpers/dbValidators.js";
import { ADMIN_ROLE } from "../constant/roles.constant.js";
import { EMAIL, ID, LIMIT, NAME, PAGE, PASSWORD, ROLE } from "../constant/paramsQueries.constant.js";
import { IS_INVALID, IS_REQUIRED, MUST_BE_NUMERIC, MUST_HAVE_MORE } from "../constant/messages.constant.js";
import { BASE_PATH, ID_PATH } from "../constant/routes.constant.js";

const userRouter = Router();

userRouter.get(BASE_PATH, [
    query(PAGE, MUST_BE_NUMERIC(PAGE)).optional({ checkFalsy: true }).isNumeric(),
    query(LIMIT, MUST_BE_NUMERIC(LIMIT)).optional({ checkFalsy: true }).isNumeric(),
    validateFields
], userGet);

userRouter.put(ID_PATH, [
    check(ID, IS_INVALID(ID)).isMongoId(),
    check(ID).custom(validUserId),
    check(ROLE).optional({ checkFalsy: true }).custom(validRole),
    validateFields
], userPut);

userRouter.post(BASE_PATH, [
    check(NAME, IS_REQUIRED(NAME)).not().isEmpty(),
    check(PASSWORD, IS_REQUIRED(PASSWORD)).not().isEmpty(),
    check(PASSWORD, MUST_HAVE_MORE(PASSWORD, 6)).isLength({min: 6}),
    check(EMAIL, IS_INVALID(EMAIL)).isEmail(),
    check(EMAIL).custom(validEmail),
    check(ROLE, IS_REQUIRED(ROLE)).not().isEmpty(),
    check(ROLE).custom(validRole),
    validateFields
], userPost);

userRouter.delete(ID_PATH, [
    validateJWT,
    validateRoles(ADMIN_ROLE),
    check(ID, IS_INVALID(ID)).isMongoId(),
    check(ID).custom(validUserId),
    validateFields
], userDelete);

export default userRouter;
