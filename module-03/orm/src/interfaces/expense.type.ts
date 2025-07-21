import { ExpenseType, ExpenseCategory } from "@prisma/client";
import { IUserParams } from "../user";

export interface ICreateExpenseParam {
  title: string;
  nominal: number;
  type: ExpenseType;
  category: ExpenseCategory;
  date: Date;
  user: IUserParams;
}
