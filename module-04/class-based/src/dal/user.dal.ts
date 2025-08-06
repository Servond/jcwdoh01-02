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
  static async createUserDAL(
    tx: Prisma.TransactionClient,
    params: ICreateUserParams
  ): Promise<User | null> {
    try {
      const user = await tx.user.create({
        data: {
          ...params,
        },
      });

      return user;
    } catch (err) {
      throw err;
    }
  }
}
