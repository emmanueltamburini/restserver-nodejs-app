import { Router } from "express";

import { BASE_PATH } from "../constant/routes.constant.js";
import { uploadPost } from "../controllers/upload.controller.js";
import { validateFiles } from "../middleware/validateFields.middleware.js";
import { FILE_NAME } from "../constant/paramsQueries.constant.js";

const uploadRouter = Router();

uploadRouter.post(BASE_PATH, [
    validateFiles(FILE_NAME),    
], uploadPost);

export default uploadRouter;
