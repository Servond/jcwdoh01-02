import db from "../lib/db";

import { Prisma } from "@prisma/client";
import { User } from "@prisma/client";
import {
  ICreateUserParams,
  IFindUserByEmailParams,
} from "../interfaces/user.interface";

export class UserDAL {
  static async findUserByEmail(
    params: IFindUserByEmailParams
  ): Promise<User | null> {
    try {
      const user = await db.user.findFirst({
        where: {
          ...params,
        },
      });

      return user;
    } catch (err) {
      throw err;
    }
  }
  static async createUserDAL(params: ICreateUserParams): Promise<User | null> {
    try {
      const user = await db.user.create({
        data: {
          ...params,
        },
      });

      return user;
    } catch (err) {
      throw err;
    }
  }

  static async updateActiveUserDal(): Promise<void> {
    try {
      await db.user.updateMany({
        data: {
          isActive: true,
        },
        where: {
          isActive: false,
        },
      });
    } catch (err) {
      throw err;
    }
  }
}
