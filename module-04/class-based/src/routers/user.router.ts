import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { UserService } from "../services/user.service";

export class UserRouter {
  router: Router = Router();
  private userService = new UserService();
  private userController = new UserController(this.userService);

  constructor() {
    this.initializeRouter();
  }

  private initializeRouter() {
    this.router.post(
      "/",
      this.userController.createUserController.bind(this.userController)
    );
    this.router.get(
      "/schedule",
      this.userController.taskScheduler.bind(this.userController)
    );
  }
}
