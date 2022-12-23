import {Schema, model} from "mongoose";

import { IS_REQUIRED } from "../constant/messages.constant.js";
import { PRODUCT, NAME, STATUS, USER, CATEGORY } from "../constant/paramsQueries.constant.js";
import { capitalize } from "../helpers/utils.js";

const productSchema = Schema({
    name: {
        type: String,
        required: [true, IS_REQUIRED(NAME)],
        unique: true
    },
    status: {
        type: Boolean,
        default: true,
        required: [true, IS_REQUIRED(STATUS)]
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: capitalize(USER),
        required: [true, IS_REQUIRED(USER)]
    },
    price: {
        type: Number,
        default: 0,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: capitalize(CATEGORY),
        required: [true, IS_REQUIRED(CATEGORY)]
    },
    description: { type: String },
    available: { type: Boolean, default: true }
});

productSchema.methods.toJSON = function () {
    const {__v, _id, ...product } = this.toObject();

    return {...product, id: _id};
}

const Product = model(capitalize(PRODUCT), productSchema);

export default Product;

