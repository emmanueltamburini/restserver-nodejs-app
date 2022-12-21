import mongoose from 'mongoose'

import { DB_CONNECTED, SOMETHING_WENT_WRONG_DB, TRYING_CONNECT_DB } from '../constant/messages.constant.js';

export const dbConnection = async () => {

    try {
        console.log(TRYING_CONNECT_DB);

        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(DB_CONNECTED);
    } catch (error) {
        console.log(error);
        throw new Error(SOMETHING_WENT_WRONG_DB)
    }
    
}