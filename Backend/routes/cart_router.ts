import express from 'express';

import CartController from '../controllers/cart_controller'

const route = express.Router();

route.post('/', CartController.postCreateCart)

export default route

