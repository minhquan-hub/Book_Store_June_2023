import mongoose from 'mongoose'

export interface IBook {
    _id: mongoose.Schema.Types.ObjectId;
    title: string;
    author: string;
    category: string;
    description: string;
    price: number;
    quantity: number;
    image: string;
    isDelete: boolean;
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: {
            values: ['Drama', 'Comedy', 'Sport'],
            message: '{VALUE} is not supported'
        }
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    isDelete: {
        type: Boolean,
    }
}, { timestamps: true });

const Book = mongoose.model<IBook>('Book', bookSchema);

export default Book;