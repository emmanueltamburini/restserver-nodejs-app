import { Router } from "express";

import { BASE_PATH } from "../constant/routes.constant.js";
import { uploadPost } from "../controllers/upload.controller.js";
import { validateFields } from "../middleware/index.js";

const uploadRouter = Router();

uploadRouter.post(BASE_PATH, [
    validateFields
], uploadPost);

export default uploadRouter;
