import express, { Application } from "express";
import helmet from "helmet";
import cors from "cors";

import { PORT } from "./config/env";

import taskScheduler from "./helpers/taskScheduler";
import { UserRouter } from "./routers/user.router";

import { ErrorMiddleware } from "./middlewares/error.middleware";

export class App {
  private port: number = Number(PORT) | 8080;
  private app: Application = express();

  constructor() {
    this.initializeMiddlewares();
    // this.initializeTaskScheduler();
    this.initializeRoutes();
    this.initializeErrorMiddleware();
  }

  private initializeMiddlewares() {
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(express.json());
  }

  private initializeRoutes() {
    this.app.use("/users", new UserRouter().router);
  }

  private initializeErrorMiddleware() {
    this.app.use(ErrorMiddleware);
  }

  private initializeTaskScheduler() {
    taskScheduler();
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server started on PORT ${this.port}`);
    });
  }
}
