import {Router} from 'express';
import { userDelete, userGet, userPatch, userPost, userPut } from '../controllers/user.controller.js';

const router = Router();

router.get('/', userGet);

router.put('/', userPut);

router.post('/', userPost);

router.delete('/', userDelete);

router.patch('/', userPatch);


export default router;