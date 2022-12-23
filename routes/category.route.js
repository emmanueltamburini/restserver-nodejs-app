import { Router } from "express";

import { BASE_PATH, ID_PATH } from "../constant/routes.constant.js";
import { categoryDelete, categoryGet, categoryGetAll, categoryPost, categoryPut } from "../controllers/category.controller.js";
import { validateFields, validateJWT } from "../middleware/index.js";
import { check } from "express-validator";
import { NAME } from "../constant/paramsQueries.constant.js";
import { IS_REQUIRED } from "../constant/messages.constant.js";

const categoryRouter = Router();

categoryRouter.get(BASE_PATH, categoryGetAll);

categoryRouter.get(ID_PATH, categoryGet);

categoryRouter.post(BASE_PATH, [
    validateJWT,
    check(NAME, IS_REQUIRED(NAME)).not().isEmpty(),
    validateFields
], categoryPost);

categoryRouter.put(ID_PATH, categoryPut);

categoryRouter.delete(ID_PATH, categoryDelete);


export default categoryRouter;
