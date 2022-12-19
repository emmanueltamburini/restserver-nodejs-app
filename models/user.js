import {Schema, model} from "mongoose";

const userSchema = Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    image: {
        type: String,
    },
    role: {
        type: String,
        required: [true, 'Role is required'],
        enum : ['ADMIN_ROLE','USER_ROLE'],
    },
    status: {
        type: Boolean,
        default: false
    },
    google: {
        type: Boolean,
        default: false
    },
});


export const user = model('User', userSchema);

