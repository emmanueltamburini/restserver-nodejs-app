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

userSchema.methods.toJSON = function () {
    const {__v, password, _id, ...user } = this.toObject();

    return {...user, uid: _id};
}

const User = model('User', userSchema);

export default User;

