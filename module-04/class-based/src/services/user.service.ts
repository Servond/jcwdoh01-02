import { UserDAL } from "../dal/user.dal";
import { HttpException } from "../exceptions/http.exception";
import db from "../lib/db";

import { User } from "@prisma/client";
import { IUserService, ICreateUserParams } from "../interfaces/user.interface";
export class UserService implements IUserService {
  async createUserService(params: ICreateUserParams): Promise<User | null> {
    try {
      const findUser = await UserDAL.findUserByEmail({
        email: params.email,
      });

      if (findUser) throw new HttpException(409, "Email already exists");

      const user = await UserDAL.createUserDAL(params);

      return user;
    } catch (err) {
      throw err;
    }
  }
}
