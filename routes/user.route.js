import { Router } from "express";
import {
  userDelete,
  userGet,
  userPatch,
  userPost,
  userPut,
} from "../controllers/user.controller.js";
import { check } from "express-validator";
import { validateFields } from "../middleware/validateFields.middleware.js";
import { validEmail, validId, validRole, validRoleUpdate } from "../helpers/dbValidators.js";

const router = Router();

router.get("/", userGet);

router.put("/:id", [
    check('id', 'Id is invalid').isMongoId(),
    check('id').custom(validId),
    check('role').custom(validRoleUpdate),
    validateFields
], userPut);

router.post("/", [
    check('name', 'Name is required').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty(),
    check('password', 'Password must have more than 6 characters').isLength({min: 6}),
    check('email', 'Email is invalid').isEmail(),
    check('email').custom(validEmail),
    check('role', 'Role is required').not().isEmpty(),
    check('role').custom(validRole),
    validateFields
], userPost);

router.delete("/:id", userDelete);

router.patch("/", userPatch);

export default router;
