import { INVALID_COLLECTION } from "../constant/messages.constant.js";

export const validCollectionParam = (collections = []) => async (collection = '') => {
    if (!collections.includes(collection)) {
        throw new Error(INVALID_COLLECTION(collections));
    }
}
