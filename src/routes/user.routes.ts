import { Router } from 'express';
import usersController from '@src/controllers/user.controller';

const router = Router();

router.route('/').get(usersController.getUsers);
router.route('/:userid').get(usersController.getUserById);
router.route('/').post(usersController.createUser);
router.route('/:userid').patch(usersController.updateUser);
router.route('/:userid').delete(usersController.destroyUser);

export default router;
