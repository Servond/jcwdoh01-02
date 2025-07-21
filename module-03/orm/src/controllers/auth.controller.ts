import { Request, Response, NextFunction } from "express";
import { LoginRepo } from "../repositories/auth.repository";

import { ILoginParams } from "../interfaces/auth.type";

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
