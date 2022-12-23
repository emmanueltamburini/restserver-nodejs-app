import express from 'express';
import cors from 'cors';

import authRouter from '../routes/auth.route.js';
import categoryRouter from '../routes/category.route.js';
import userRouter from '../routes/user.route.js';
import { dbConnection } from '../db/config.js';
import { PUBLIC_FOLDER } from '../constant/values.constant.js';
import { SERVER_RUNNING } from '../constant/messages.constant.js';
import { AUTH_PATH, CATEGORY_PATH, PRODUCT_PATH, USER_PATH } from '../constant/routes.constant.js';
import productRouter from '../routes/product.route.js';

export default class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            user: USER_PATH,
            auth: AUTH_PATH,
            category: CATEGORY_PATH,
            product: PRODUCT_PATH,
        }

        this.database();

        this.middleware();

        this.routes();
    }

    async database () {
        await dbConnection();
    }

    middleware() {
        this.app.use(cors());

        this.app.use(express.json());

        this.app.use(express.static(PUBLIC_FOLDER));
    }

    routes() {
        this.app.use(this.paths.auth, authRouter);
        this.app.use(this.paths.user, userRouter);
        this.app.use(this.paths.category, categoryRouter);
        this.app.use(this.paths.product, productRouter);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(SERVER_RUNNING(this.port));
        });
    }

}
