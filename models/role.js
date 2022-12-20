import {Schema, model} from "mongoose";

const roleSchema = Schema({
    role: {
        type: String,
        required: [true, 'Role is required']
    },
});

const Role = model('Role', roleSchema);

roleSchema.methods.toJSON = function () {
    const {__v, _id, ...user } = this.toObject();

    return {...user, id: _id};
}

export default Role;

