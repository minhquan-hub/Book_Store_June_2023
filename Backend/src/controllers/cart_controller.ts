import { next } from "inversify-express-utils";
import { NextFunction, Request, Response } from "express";

import { CartCreateDto } from "../dtos";
import APIError from "../error_handling/errors/api_error";

class CartController {
  constructor() {}

  async postCreateCart(req: Request, res: Response, next: NextFunction) {
    try {
      const cartCreateDto: CartCreateDto = req.body;
      //    const cart = await CartService.createCart(cartCreateDto)
      //    return res.status(StatusCodes.OK).json(cart)
    } catch (err) {
      next(err);
    }
  }
}

export default new CartController();
