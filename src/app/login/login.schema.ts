import { Document, model, Schema } from 'mongoose';
import {z} from 'zod';
import { LoginValidator } from './login.validator';

type _Login = z.infer<typeof LoginValidator>

export interface ILogin extends Document, _Login {}

const LoginSchema = new Schema<ILogin>({
    firstName: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        minLength: 2,
        maxlength: 50,
    },
    lastName:{
        type: String,
        required: false,
        lowercase: true,
        trim: true,
        default: "",
    },
    userName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})

export const Login = model<ILogin>("Login", LoginSchema);