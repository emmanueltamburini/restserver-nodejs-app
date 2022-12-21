import {Schema, model} from "mongoose";
import { IS_REQUIRED } from "../constant/messages.constant.js";
import { EMAIL, NAME, PASSWORD, ROLE, USER } from "../constant/paramsQueries.constant.js";
import { capitalize } from "../helpers/utils.js";

const userSchema = Schema({
    name: {
        type: String,
        required: [true, IS_REQUIRED(NAME)]
    },
    email: {
        type: String,
        required: [true, IS_REQUIRED(EMAIL)],
        unique: true
    },
    password: {
        type: String,
        required: [true, IS_REQUIRED(PASSWORD)]
    },
    image: {
        type: String,
    },
    role: {
        type: String,
        required: [true, IS_REQUIRED(ROLE)],
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

const User = model(capitalize(USER), userSchema);

export default User;

