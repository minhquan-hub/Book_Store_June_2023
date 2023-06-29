import { Request, Response} from 'express';
import { StatusCodes } from 'http-status-codes';

import CartService from '../services/cart_service'
import APIError from '../error_handling/errors/api_error'
import { CartCreateDto } from '../dtos/cart/cart_create_dto';

class CartController {

    constructor() {}

    async postCreateCart(req: Request, res: Response) {
        try {
           const cartCreateDto: CartCreateDto = req.body
           const cart = await CartService.createCart(cartCreateDto)
           return res.status(StatusCodes.OK).json(cart)
        } catch (err) {
            console.error(err)
            throw new APIError('Api Error')
        }
    }
}

export default new CartController()