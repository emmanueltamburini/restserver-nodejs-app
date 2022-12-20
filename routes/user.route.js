import { Router } from "express";
import {
  userDelete,
  userGet,
  userPatch,
  userPost,
  userPut,
} from "../controllers/user.controller.js";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validateFields.middleware.js";

const router = Router();

router.get("/", userGet);

router.put("/:id", userPut);

router.post("/", [
    check('name', 'Name is required').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty(),
    check('password', 'Password must have more than 6 characters').isLength({min: 6}),
    check('email', 'Email is invalid').isEmail(),
    check('role', 'Role is required').not().isEmpty(),
    check('role', 'Role must be valid').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    validateFields
], userPost);

router.delete("/:id", userDelete);

router.patch("/", userPatch);

export default router;
