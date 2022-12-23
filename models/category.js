import {Schema, model} from "mongoose";

import { IS_REQUIRED } from "../constant/messages.constant.js";
import { CATEGORY, NAME, STATUS, USER } from "../constant/paramsQueries.constant.js";
import { capitalize } from "../helpers/utils.js";

const categorySchema = Schema({
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
});

categorySchema.methods.toJSON = function () {
    const {__v, _id, ...category } = this.toObject();

    return {...category, id: _id};
}

const Category = model(capitalize(CATEGORY), categorySchema);

export default Category;

