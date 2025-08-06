import { Request, Response, NextFunction } from "express";
import { UserDAL } from "../dal/user.dal";
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

  async taskScheduler(req: Request, res: Response, next: NextFunction) {
    try {
      await UserDAL.updateActiveUserDal();

      res.json({
        message: "OK",
      });
    } catch (err) {
      next(err);
    }
  }
}
