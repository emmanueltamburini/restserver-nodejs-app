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

        this.app.put('/api',(req, res) => {
          res.json({
            msg: 'put API'
          });
        });

        this.app.post('/api',(req, res) => {
          res.status(201).json({
            msg: 'post API'
          });
        });

        this.app.delete('/api',(req, res) => {
          res.json({
            msg: 'delete API'
          });
        });

        this.app.patch('/api',(req, res) => {
          res.json({
            msg: 'patch API'
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
