import { Router } from "express";

import { BASE_PATH, ID_PATH } from "../constant/routes.constant.js";
import { categoryDelete, categoryGet, categoryGetAll, categoryPost, categoryPut } from "../controllers/category.controller.js";

const categoryRouter = Router();

categoryRouter.get(BASE_PATH, categoryGetAll);

categoryRouter.get(ID_PATH, categoryGet);

categoryRouter.post(BASE_PATH, categoryPost);

categoryRouter.put(ID_PATH, categoryPut);

categoryRouter.delete(ID_PATH, categoryDelete);


export default categoryRouter;
