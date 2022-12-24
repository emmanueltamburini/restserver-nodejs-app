import { AVAILABLE_COLLECTION } from "../constant/paramsQueries.constant.js";
import { INVALID_COLLECTION } from "../constant/messages.constant.js";

export const validCollectionParam = async (collection = '') => {
    if (!AVAILABLE_COLLECTION.includes(collection)) {
        throw new Error(INVALID_COLLECTION(AVAILABLE_COLLECTION));
    }
}
