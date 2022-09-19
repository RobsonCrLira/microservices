import express from 'express';
import cors from 'cors';
import logger from 'morgan';

class App {
  server;

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.server.use(cors({ origin: '*' }));
    this.server.use(express.json());
    this.server.use(logger('dev'));
    this.server.use(express.urlencoded({ extended: true }));
  }

  private routes() {}
}
export default new App().server;
