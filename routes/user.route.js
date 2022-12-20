import { Router } from "express";
import {
  userDelete,
  userGet,
  userPatch,
  userPost,
  userPut,
} from "../controllers/user.controller.js";
import { check, query } from "express-validator";
import { validateFields } from "../middleware/validateFields.middleware.js";
import { validEmail, validId, validRole } from "../helpers/dbValidators.js";

const router = Router();

router.get("/", [
    query('page', 'Page must be numeric field').optional({ checkFalsy: true }).isNumeric(),
    query('limit', 'Limit must be numeric field').optional({ checkFalsy: true }).isNumeric(),
    validateFields
], userGet);

router.put("/:id", [
    check('id', 'Id is invalid').isMongoId(),
    check('id').custom(validId),
    check('role').optional({ checkFalsy: true }).custom(validRole),
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
