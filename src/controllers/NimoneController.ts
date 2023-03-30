import {Router, Response, Request} from 'express'

export class NimomeController {
  public router: Router;
  public path: string = '/nimone'

  constructor() {
    this.router = Router();
    this.configureRoutes();
  }

  private configureRoutes(): void {
    this.router.get('/', this.getHandler);
    this.router.post('/', this.postHandler);
  }

  private getHandler(req: Request, res: Response): void {
    res.send('Hello from GET!');
  }

  private postHandler(req: Request, res: Response): void {
    res.send('Hello from POST!');
  }
}
