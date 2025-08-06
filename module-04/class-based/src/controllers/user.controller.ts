import { Request, Response, NextFunction } from "express";

import { IUserService, ICreateUserParams } from "../interfaces/user.interface";

export class UserController {
  constructor(private userService: IUserService) {}

  async createUserController(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.userService.createUserService(
        req.body as ICreateUserParams
      );

      res.json({
        message: "OK",
        data: response,
      });
    } catch (err) {
      next(err);
    }
  }
}
