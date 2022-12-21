import { capitalize } from "../helpers/utils.js";

export const IS_REQUIRED = (field = '') => {
    return `${capitalize(field)} is required`;
}

export const IS_INVALID = (field = '') => {
    return `${capitalize(field)} is invalid`;
}

export const MUST_HAVE_MORE = (field = '', moreThan = 0) => {
    return `${capitalize(field)} must have more than ${moreThan} characters`;
}

export const MUST_BE_NUMERIC = (field = '') => {
    return `${capitalize(field)} must be numeric field`;
}

export const MUST_HAVE_RIGHT_FORMAT = (field = '') => {
    return `${capitalize(field)} must have right format`;
}