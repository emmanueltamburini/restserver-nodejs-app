import dotenv from 'dotenv'
import Server from './classes/server.js';

dotenv.config();

const server = new Server();

server.listen();