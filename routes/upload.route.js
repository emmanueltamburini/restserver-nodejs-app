import { Router } from "express";

import { BASE_PATH } from "../constant/routes.constant.js";
import { uploadPost } from "../controllers/upload.controller.js";
import { validateExt, validateFiles } from "../middleware/validateFields.middleware.js";
import { FILE_NAME, VALIDATE_EXT } from "../constant/paramsQueries.constant.js";

const uploadRouter = Router();

uploadRouter.post(BASE_PATH, [
    validateFiles(FILE_NAME),
    validateExt(VALIDATE_EXT),
], uploadPost);

export default uploadRouter;
