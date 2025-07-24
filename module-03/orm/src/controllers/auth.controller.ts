import { Request, Response, NextFunction } from "express";
import {
  LoginRepo,
  forgotPassRepo,
  ChangePasswordRepo,
} from "../repositories/auth.repository";

import { ILoginParams, IForgotPasswordParams } from "../interfaces/auth.type";
import { IUserParams } from "../user";

export async function LoginController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const resp = await LoginRepo(req.body as ILoginParams);

    res.json({
      message: "OK",
      data: {
        user: resp.payload,
        token: resp.token,
      },
    });
  } catch (err) {
    throw err;
  }
}

export async function ForgotPasswordController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await forgotPassRepo(req.body as IForgotPasswordParams);

    res.json({
      message: "OK",
    });
  } catch (err) {
    throw err;
  }
}

export async function ChangePasswordController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    const { email } = req.user as IUserParams;
    await ChangePasswordRepo({ ...req.body, email, token });

    res.json({
      message: "OK",
    });
  } catch (err) {
    throw err;
  }
}
