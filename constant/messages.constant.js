import { capitalize } from "../helpers/utils.js";

export const INVALID_USER = 'Invalid username or password';
export const SOMETHING_WENT_WRONG = 'Something went wrong, please contact admin';
export const TRYING_CONNECT_DB = 'Trying to connect to bd';
export const DB_CONNECTED = 'Data base has connected';
export const SOMETHING_WENT_WRONG_DB = 'There was a problem in data base connection';
export const SOMETHING_WENT_WRONG_ = 'Something went wrong in generating JWT';
export const TOKEN_INVALID = 'x-token is not valid';
export const TOKEN_INVALID_USER_NOT_FOUND = 'x-token is not valid - user does not exists';
export const NOT_USER_TO_VALIDATE = 'There is not user to validate role'; 
export const GOOGLE_TOKEN_COULD_NOT_VERIFY = 'Token could not verify';
export const USER_UNAUTHORIZE = 'User is unauthorize, please talk with the admin';

export const ELEMENT_IS_NOT_AVAILABLE = (element) => `${capitalize(element)} is not available`;;
export const SERVER_RUNNING = (port) =>  `Server is running in port ${port}`;
export const INVALID_ROLE = (role) => `Role ${role} is not valid`;
export const IS_REQUIRED = (field = '') => `${capitalize(field)} is required`;
export const IS_INVALID = (field = '') => `${capitalize(field)} is invalid`;
export const MUST_HAVE_MORE = (field = '', moreThan = 0) => `${capitalize(field)} must have more than ${moreThan} characters`;
export const MUST_BE_NUMERIC = (field = '') => `${capitalize(field)} must be numeric field`;
export const MUST_BE_BOOLEAN = (field = '') => `${capitalize(field)} must be boolean field`;
export const MUST_BE_STRING = (field = '') => `${capitalize(field)} must be string field`;
export const MUST_HAVE_RIGHT_FORMAT = (field = '') => `${capitalize(field)} must have right format`;
export const NOT_PERMISSION_TO_THIS = (name = '') => `${name} has not permission to do this`;
export const ELEMENT_ID_DOES_NOT_EXIST= (id, element) => `${capitalize(element)} with id ${id} does not exist`;
export const ELEMENT_TAKEN = (name, element) => `${capitalize(element)} ${name} is already taken`;
