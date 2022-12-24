import express from 'express';
import cors from 'cors';

import authRouter from '../routes/auth.route.js';
import categoryRouter from '../routes/category.route.js';
import userRouter from '../routes/user.route.js';
import { dbConnection } from '../db/config.js';
import { PUBLIC_FOLDER } from '../constant/values.constant.js';
import { SERVER_RUNNING } from '../constant/messages.constant.js';
import { AUTH_PATH, CATEGORY_PATH, EXAMPLE_PATH, PRODUCT_PATH, SEARCH_PATH, UPLOAD_PATH, USER_PATH } from '../constant/routes.constant.js';
import productRouter from '../routes/product.route.js';
import exampleRouter from '../routes/example.route.js';
import searchRouter from '../routes/search.route.js';
import uploadRouter from '../routes/upload.route.js';
import fileUpload from 'express-fileupload';

export default class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            user: USER_PATH,
            auth: AUTH_PATH,
            category: CATEGORY_PATH,
            product: PRODUCT_PATH,
            search: SEARCH_PATH,
            upload: UPLOAD_PATH,
            example: EXAMPLE_PATH,
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

        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/'
        }));
    }

    routes() {
        this.app.use(this.paths.auth, authRouter);
        this.app.use(this.paths.user, userRouter);
        this.app.use(this.paths.category, categoryRouter);
        this.app.use(this.paths.product, productRouter);
        this.app.use(this.paths.search, searchRouter);
        this.app.use(this.paths.upload, uploadRouter);
        this.app.use(this.paths.example, exampleRouter);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(SERVER_RUNNING(this.port));
        });
    }

}
