import { Request, Response, NextFunction } from "express";
import {
  createUserRepo,
  findUserByEmail,
} from "../repositories/user.repository";
import { ICreateUserParam } from "../interfaces/user.types";

export async function createUserController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const resp = await createUserRepo(req.body as ICreateUserParam);

    res.json({
      message: "OK",
      data: resp,
    });
  } catch (err) {
    next(err);
  }
}

export async function getUserDetailController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { email } = req.body;
    const resp = await findUserByEmail(email);

    res.json({
      message: "OK",
      data: resp,
    });
  } catch (err) {
    next(err);
  }
}
