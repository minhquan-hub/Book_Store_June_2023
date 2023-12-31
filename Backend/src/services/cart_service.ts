import { Cart } from "../models";
import { CartCreateDto } from "../dtos";

class CartService {
  constructor() {}

  async createCart(cartCreateDto: CartCreateDto) {
    const newCart = new Cart({
      userId: cartCreateDto.userId,
      books: cartCreateDto.book,
      isDelete: false,
    });

    const cart = await newCart.save();

    return cart;
  }
}

export default new CartService();
