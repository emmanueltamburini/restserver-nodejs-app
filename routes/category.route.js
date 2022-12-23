import { Router } from "express";

import { BASE_PATH, ID_PATH } from "../constant/routes.constant.js";
import { categoryDelete, categoryGet, categoryGetAll, categoryPost, categoryPut } from "../controllers/category.controller.js";
import { validateFields, validateJWT } from "../middleware/index.js";
import { check, query } from "express-validator";
import { ID, LIMIT, NAME, PAGE } from "../constant/paramsQueries.constant.js";
import { IS_INVALID, IS_REQUIRED, MUST_BE_NUMERIC } from "../constant/messages.constant.js";
import { validCategoryId } from "../helpers/dbValidators.js";

const categoryRouter = Router();

categoryRouter.get(BASE_PATH, [
    query(PAGE, MUST_BE_NUMERIC(PAGE)).optional({ checkFalsy: true }).isNumeric(),
    query(LIMIT, MUST_BE_NUMERIC(LIMIT)).optional({ checkFalsy: true }).isNumeric(),
    validateFields
], categoryGetAll);

categoryRouter.get(ID_PATH, [
    check(ID, IS_INVALID(ID)).isMongoId(),
    check(ID).custom(validCategoryId),
    validateFields
], categoryGet);

categoryRouter.post(BASE_PATH, [
    validateJWT,
    check(NAME, IS_REQUIRED(NAME)).not().isEmpty(),
    validateFields
], categoryPost);

categoryRouter.put(ID_PATH, [
    check(ID, IS_INVALID(ID)).isMongoId(),
    check(ID).custom(validCategoryId),
    validateFields
], categoryPut);

categoryRouter.delete(ID_PATH, [
    check(ID, IS_INVALID(ID)).isMongoId(),
    check(ID).custom(validCategoryId),
    validateFields
], categoryDelete);


export default categoryRouter;
