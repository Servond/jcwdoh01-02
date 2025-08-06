import { User } from "@prisma/client";

export interface ICreateUserParams {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  roleId: number;
}

export interface IFindUserByEmailParams {
  email: string;
}

export interface IUserService {
  createUserService(params: ICreateUserParams): Promise<User | null>;
}
