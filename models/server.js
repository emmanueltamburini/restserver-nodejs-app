import express from 'express';
import cors from 'cors';
import authRouter from '../routes/auth.route.js';
import userRouter from '../routes/user.route.js';
import { dbConnection } from '../db/config.js';

export default class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/user';
        this.authPath = '/api/auth';

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

        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.authPath, authRouter);
        this.app.use(this.userPath, userRouter);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running in port ${this.port}`);
        });
    }

}
