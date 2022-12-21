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

const Role = model(capitalize(ROLE), roleSchema);

roleSchema.methods.toJSON = function () {
    const {__v, _id, ...user } = this.toObject();

    return {...user, id: _id};
}

export default Role;

