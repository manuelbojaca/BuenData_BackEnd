import { Router } from 'express';
import usersController from '@src/controllers/index.controller';

const router = Router();

router.route('/').get(usersController.list);
router.route('/:userid').get(usersController.getUserById);

export default router;
