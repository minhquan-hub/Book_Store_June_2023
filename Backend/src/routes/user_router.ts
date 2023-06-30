import express from "express";
import { container } from "../../container";
import { UserController } from "../controllers";

export const userRouter = express.Router();

const userController = container.resolve<UserController>(UserController);

userRouter.post("/", userController.postCreateUser.bind(userController));
