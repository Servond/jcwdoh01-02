import { NextFunction, Request, Response } from "express";
import { IAuthService, User } from "../interfaces/auth.type";

// FILE CONTROLLER.TS
export class AuthController {
  constructor(private authService: IAuthService) {}

  async login(req: Request, res: Response, next: NextFunction) {
    const response = await this.authService.login("username", "password");
  }
}

// FILE SERVICE / ACTION / REPOSITORY.TS
export class AuthService implements IAuthService {
  async login(username: string, password: string): Promise<User | null> {
    return { email: "", name: "" };
  }
}

// FILE ROUTER.TS
const authService = new AuthService();
const authController = new AuthController(authService);
Router.post("/login", authController.login.bind(authController));
