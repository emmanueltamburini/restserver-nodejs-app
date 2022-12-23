import {Schema, model} from "mongoose";

import { IS_REQUIRED } from "../constant/messages.constant.js";
import { ROLE } from "../constant/paramsQueries.constant.js";
import { capitalize } from "../helpers/utils.js";

const roleSchema = Schema({
    role: {
        type: String,
        required: [true, IS_REQUIRED(ROLE)]
    },
});

roleSchema.methods.toJSON = function () {
    const {__v, _id, ...role } = this.toObject();

    return {...role, id: _id};
}

const Role = model(capitalize(ROLE), roleSchema);

export default Role;

