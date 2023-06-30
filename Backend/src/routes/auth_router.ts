import express from "express";
import { container } from "../../container";
import { AuthController } from "../controllers";

export const authRouter = express.Router();

const authController = container.resolve<AuthController>(AuthController);

authRouter.post("/login", authController.loginUser.bind(authController));
