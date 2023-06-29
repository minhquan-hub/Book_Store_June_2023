import mongoose from 'mongoose';

export interface IUser {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
    password: string;
    role: string;
    phone: string;
}

const userSchema = new mongoose.Schema<IUser>({
    email: {
        type: String,
        require: true,
        minlength: 6,
        unique: true
    },
    password: {
        type: String,
        require: true,
        minlength: 6,
    },
    role: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 10
    }
}, { timestamps: true })

const User = mongoose.model('user', userSchema);

export default User;