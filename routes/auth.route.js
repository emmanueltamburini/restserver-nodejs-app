import { Router } from "express";
import { loginPost } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/login", loginPost);

export default authRouter;
