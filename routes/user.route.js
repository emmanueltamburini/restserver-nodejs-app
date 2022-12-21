import { Router } from "express";
import {
  userDelete,
  userGet,
  userPatch,
  userPost,
  userPut,
} from "../controllers/user.controller.js";
import { check, query } from "express-validator";
import { validateFields } from "../middleware/validateFields.middleware.js";
import { validEmail, validId, validRole } from "../helpers/dbValidators.js";
import { validateJWT } from "../middleware/validateJWT.middleware.js";
import { validateRoles } from "../middleware/validateRoles.middleware.js";
import { ADMIN_ROLE } from "../constant/roles.constant.js";
import { EMAIL, ID, LIMIT, NAME, PAGE, PASSWORD, ROLE } from "../constant/paramsQueries.constant.js";
import { IS_INVALID, IS_REQUIRED, MUST_BE_NUMERIC, MUST_HAVE_MORE } from "../constant/messages.constant.js";

const userRouter = Router();

userRouter.get("/", [
    query(PAGE, MUST_BE_NUMERIC(PAGE)).optional({ checkFalsy: true }).isNumeric(),
    query(LIMIT, MUST_BE_NUMERIC(LIMIT)).optional({ checkFalsy: true }).isNumeric(),
    validateFields
], userGet);

userRouter.put("/:id", [
    check(ID, IS_INVALID(ID)).isMongoId(),
    check(ID).custom(validId),
    check(ROLE).optional({ checkFalsy: true }).custom(validRole),
    validateFields
], userPut);

userRouter.post("/", [
    check(NAME, IS_REQUIRED(NAME)).not().isEmpty(),
    check(PASSWORD, IS_REQUIRED(PASSWORD)).not().isEmpty(),
    check(PASSWORD, MUST_HAVE_MORE(PASSWORD, 6)).isLength({min: 6}),
    check(EMAIL, IS_INVALID(EMAIL)).isEmail(),
    check(EMAIL).custom(validEmail),
    check(ROLE, IS_REQUIRED(ROLE)).not().isEmpty(),
    check(ROLE).custom(validRole),
    validateFields
], userPost);

userRouter.delete("/:id", [
    validateJWT,
    validateRoles(ADMIN_ROLE),
    check(ID, IS_INVALID(ID)).isMongoId(),
    check(ID).custom(validId),
    validateFields
], userDelete);

userRouter.patch("/", userPatch);

export default userRouter;
