import { Request, Response, NextFunction } from "express";
import {
  createExpenseRepo,
  findExpenseList,
} from "../repositories/expense.repository";

import { IUserParams } from "../user";
export async function createExpenseController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const user = req.user as IUserParams;
    const resp = await createExpenseRepo({ ...req.body, user });

    res.json({
      message: "OK",
      data: resp,
    });
  } catch (err) {
    next(err);
  }
}

export async function getExpenseListController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const resp = await findExpenseList();

    res.json({
      message: "OK",
      data: resp,
    });
  } catch (err) {
    next(err);
  }
}
