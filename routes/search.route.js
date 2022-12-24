import { Router } from "express";

import { ID_COLLECTION_TERM } from "../constant/routes.constant.js";
import { searchGet } from "../controllers/search.controller.js";
import { validateFields } from "../middleware/index.js";
import { check } from "express-validator";
import { AVAILABLE_COLLECTION, COLLECTION } from "../constant/paramsQueries.constant.js";
import { validCollectionParam } from "../helpers/validators.js";

const searchRouter = Router();

searchRouter.get(ID_COLLECTION_TERM, [
    check(COLLECTION).custom(validCollectionParam(AVAILABLE_COLLECTION)),
    validateFields
], searchGet);


export default searchRouter;
