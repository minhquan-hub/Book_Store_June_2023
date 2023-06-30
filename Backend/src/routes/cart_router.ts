import express from "express";

import CartController from "../controllers/cart_controller";

export const cartRouter = express.Router();

cartRouter.post("/", CartController.postCreateCart);
