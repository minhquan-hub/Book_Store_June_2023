import express from 'express';
import { AuthController } from '../controllers/auth_controller';
import { container } from '../container';



const route = express.Router();

const authController = container.resolve<AuthController>(AuthController);

route.post('/login', authController.loginUser.bind(authController))

export default route