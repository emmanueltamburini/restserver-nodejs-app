import express from 'express';
import cors from 'cors';
import router from '../routes/user.route.js';

export default class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/user';

        this.middleware();

        this.routes();
    }

    middleware() {
        this.app.use(cors());

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
