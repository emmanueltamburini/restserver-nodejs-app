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
import { EMAIL, ID, IMAGE, LIMIT, NAME, PAGE, PASSWORD, ROLE } from "../constant/paramsQueries.constant.js";
import { IS_INVALID, IS_REQUIRED, MUST_BE_NUMERIC, MUST_BE_STRING, MUST_HAVE_MORE } from "../constant/messages.constant.js";
import { BASE_PATH, ID_PATH } from "../constant/routes.constant.js";

const userRouter = Router();

userRouter.get(BASE_PATH, [
    query(PAGE, MUST_BE_NUMERIC(PAGE)).optional({ checkFalsy: true }).isNumeric(),
    query(LIMIT, MUST_BE_NUMERIC(LIMIT)).optional({ checkFalsy: true }).isNumeric(),
    validateFields
], userGet);

userRouter.post(BASE_PATH, [
    check(NAME, IS_REQUIRED(NAME)).not().isEmpty(),
    check(NAME, MUST_BE_STRING(NAME)).isString(),
    check(PASSWORD, IS_REQUIRED(PASSWORD)).not().isEmpty(),
    check(PASSWORD, MUST_HAVE_MORE(PASSWORD, 6)).isLength({min: 6}),
    check(EMAIL, IS_INVALID(EMAIL)).isEmail(),
    check(EMAIL).custom(validEmail),
    check(ROLE, IS_REQUIRED(ROLE)).not().isEmpty(),
    check(ROLE).custom(validRole),
    check(IMAGE, MUST_BE_NUMERIC(IMAGE)).optional({ checkFalsy: true }).isString(),
    validateFields
], userPost);

userRouter.put(ID_PATH, [
    check(ID, IS_INVALID(ID)).isMongoId(),
    check(ID).custom(validUserId),
    check(NAME, MUST_BE_STRING(NAME)).optional({ checkFalsy: true }).isString(),
    check(EMAIL, IS_INVALID(EMAIL)).optional({ checkFalsy: true }).isEmail(),
    check(EMAIL).optional({ checkFalsy: true }).custom(validEmail),
    check(PASSWORD, MUST_HAVE_MORE(PASSWORD, 6)).optional({ checkFalsy: true }).isLength({min: 6}),
    check(ROLE).optional({ checkFalsy: true }).custom(validRole),
    check(IMAGE, MUST_BE_NUMERIC(IMAGE)).optional({ checkFalsy: true }).isString(),
    validateFields
], userPut);


userRouter.delete(ID_PATH, [
    validateJWT,
    validateRoles(ADMIN_ROLE),
    check(ID, IS_INVALID(ID)).isMongoId(),
    check(ID).custom(validUserId),
    validateFields
], userDelete);

export default userRouter;
