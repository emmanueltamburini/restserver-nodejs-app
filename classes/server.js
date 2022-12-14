import express from 'express'

export default class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.middleware();

        this.routes();
    }

    routes() {
        this.app.get('/api',(req, res) => {
          res.json({
            msg: 'get API'
          });
        });
    }

    middleware() {
        this.app.use(express.static('public'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running in port ${this.port}`);
        });
    }

}
