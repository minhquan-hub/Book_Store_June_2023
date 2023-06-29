import mongoose from 'mongoose'

export interface ICart {
    userId: mongoose.Schema.Types.ObjectId;
    books: Object[];
    isDelete: boolean;
}

const cartSchema = new mongoose.Schema<ICart>({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    books: [
        {
            bookId: {type: mongoose.Schema.Types.ObjectId,  ref: "book"},
            quantity: {type: Number, min: 1},
        },

    ],
    isDelete: {
        type: Boolean,
    }
}, { timestamps: true })

const Cart = mongoose.model('cart', cartSchema)

export default Cart;

