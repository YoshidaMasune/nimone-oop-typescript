import express, {Application} from 'express';
import { NimomeController } from './controllers/NimoneController';

export class AppApi {
  private app:Application;
  public port: number;

  constructor(port:number) {
    this.app = express();
    this.port = port;
    this.configMiddlewares();
  }

  private configMiddlewares():void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private setRoutes() {
    this.app.use()
  }

  // private configController() {
  //   const nimoneControl = new NimomeController();

  // }

  start() {

    this.app.listen(this.port, () => {
      console.log(`server run on port http://localhost:${this.port}`)
    })
  }
}