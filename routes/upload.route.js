import { Router } from "express";

import { BASE_PATH, ID_COLLECTION_ID } from "../constant/routes.constant.js";
import { uploadPost, uploadPut, uploadGet } from "../controllers/upload.controller.js";
import { validateExt, validateFields, validateFiles } from "../middleware/validateFields.middleware.js";
import { AVAILABLE_COLLECTION_TO_UPDATE_IMAGE, COLLECTION, FILE_NAME, ID, VALIDATE_EXT } from "../constant/paramsQueries.constant.js";
import { check } from "express-validator";
import { validCollectionParam } from "../helpers/validators.js";
import { IS_INVALID } from "../constant/messages.constant.js";

const uploadRouter = Router();

uploadRouter.post(BASE_PATH, [
    validateFiles(FILE_NAME),
    validateExt(VALIDATE_EXT),
], uploadPost);

uploadRouter.put(ID_COLLECTION_ID, [
    validateFiles(FILE_NAME),
    validateExt(VALIDATE_EXT),
    check(ID, IS_INVALID(ID)).isMongoId(),
    check(COLLECTION).custom(validCollectionParam(AVAILABLE_COLLECTION_TO_UPDATE_IMAGE)),
    validateFields,
], uploadPut);

uploadRouter.get(ID_COLLECTION_ID, [
    check(ID, IS_INVALID(ID)).isMongoId(),
    check(COLLECTION).custom(validCollectionParam(AVAILABLE_COLLECTION_TO_UPDATE_IMAGE)),
    validateFields,
], uploadGet);

export default uploadRouter;
