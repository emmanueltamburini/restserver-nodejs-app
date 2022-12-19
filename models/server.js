import express from 'express';
import cors from 'cors';
import router from '../routes/user.route.js';
import { dbConnection } from '../db/config.js';

export default class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/user';

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
        this.app.use(this.userPath, router);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running in port ${this.port}`);
        });
    }

}
