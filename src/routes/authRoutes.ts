import { Router } from 'express';
import { updateUser } from '../controllers/authController';

const router = Router();


router.patch('/updatepassword/:id', updateUser);

export default router;
