import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { findToken } from "../repositories/tokenForgotPassword.repository";

import { SECRET_KEY } from "../config";
import { IUserParams } from "../user";

export async function verifyToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) throw new Error("Unauthorized");

    const verifyToken = verify(token, SECRET_KEY as string);

    if (!verifyToken) throw new Error("Invalid token");

    req.user = verifyToken as IUserParams;

    next();
  } catch (err) {
    next(err);
  }
}

export async function adminGuard(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    if (req.user?.role !== "admin") throw new Error("Restricted");

    next();
  } catch (err) {
    next(err);
  }
}

export async function verifyTokenForgotPassword(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) throw new Error("Unauthorized");

    const verifyToken = verify(token, SECRET_KEY as string);

    if (!verifyToken) throw new Error("Invalid token");

    const checkToken = await findToken(token);

    if (!checkToken) throw new Error("Token Not Found");

    req.user = verifyToken as IUserParams;

    next();
  } catch (err) {
    next(err);
  }
}
