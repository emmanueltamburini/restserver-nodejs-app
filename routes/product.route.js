import { Router } from "express";

import { BASE_PATH, ID_PATH } from "../constant/routes.constant.js";
import { productDelete, productGet, productGetAll, productPost, productPut } from "../controllers/product.controller.js";
import { validateFields, validateJWT, validateRoles } from "../middleware/index.js";
import { check, query } from "express-validator";
import { AVAILABLE, CATEGORY, DESCRIPTION, ID, LIMIT, NAME, PAGE, PRICE } from "../constant/paramsQueries.constant.js";
import { IS_INVALID, IS_REQUIRED, MUST_BE_BOOLEAN, MUST_BE_NUMERIC, MUST_BE_STRING } from "../constant/messages.constant.js";
import { validCategoryId, validProductId, validProductName } from "../helpers/dbValidators.js";
import { ADMIN_ROLE } from "../constant/roles.constant.js";

const productRouter = Router();

productRouter.get(BASE_PATH, [
    query(PAGE, MUST_BE_NUMERIC(PAGE)).optional({ checkFalsy: true }).isNumeric(),
    query(LIMIT, MUST_BE_NUMERIC(LIMIT)).optional({ checkFalsy: true }).isNumeric(),
    validateFields
], productGetAll);

productRouter.get(ID_PATH, [
    check(ID, IS_INVALID(ID)).isMongoId(),
    check(ID).custom(validProductId),
    validateFields
], productGet);

productRouter.post(BASE_PATH, [
    validateJWT,
    check(NAME, IS_REQUIRED(NAME)).not().isEmpty(),
    check(NAME).custom(validProductName),
    check(NAME, MUST_BE_STRING(NAME)).isString(),
    check(CATEGORY, IS_INVALID(CATEGORY)).isMongoId(),
    check(CATEGORY).custom(validCategoryId),
    check(PRICE, MUST_BE_NUMERIC(PRICE)).optional({ checkFalsy: true }).isNumeric(),
    check(AVAILABLE, MUST_BE_BOOLEAN(AVAILABLE)).optional({ checkFalsy: true }).isBoolean(),
    check(DESCRIPTION, MUST_BE_STRING(DESCRIPTION)).optional({ checkFalsy: true }).isString(),
    validateFields
], productPost);

productRouter.put(ID_PATH, [
    validateJWT,
    check(ID, IS_INVALID(ID)).isMongoId(),
    check(ID).custom(validProductId),
    check(NAME, IS_REQUIRED(NAME)).not().isEmpty(),
    check(NAME).custom(validProductName),
    check(NAME, MUST_BE_STRING(NAME)).isString(),
    check(CATEGORY, IS_INVALID(CATEGORY)).optional({ checkFalsy: true }).isMongoId(),
    check(CATEGORY).optional({ checkFalsy: true }).custom(validCategoryId),
    check(PRICE, MUST_BE_NUMERIC(PRICE)).optional({ checkFalsy: true }).isNumeric(),
    check(AVAILABLE, MUST_BE_BOOLEAN(AVAILABLE)).optional({ checkFalsy: true }).isBoolean(),
    check(DESCRIPTION, MUST_BE_STRING(DESCRIPTION)).optional({ checkFalsy: true }).isString(),
    validateFields
], productPut);

productRouter.delete(ID_PATH, [
    validateJWT,
    validateRoles(ADMIN_ROLE),
    check(ID, IS_INVALID(ID)).isMongoId(),
    check(ID).custom(validProductId),
    validateFields
], productDelete);


export default productRouter;
