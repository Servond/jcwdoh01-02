import prisma from "../lib/prisma";
import { ICreateExpenseParam } from "../interfaces/expense.type";
import { findUserByEmail } from "./user.repository";

export async function findExpenseList() {
  try {
    const resp = await prisma.expense.findMany({
      //   select: {
      //     title: true,
      //     nominal: true,
      //     type: true,
      //     category: true,
      //     date: true,
      //     user: {
      //       select: {
      //         email: true,
      //       },
      //     },
      //   },
      include: {
        user: true,
      },
    });

    return resp;
  } catch (err) {
    throw err;
  }
}

export async function createExpenseRepo(params: ICreateExpenseParam) {
  try {
    const temp = await findUserByEmail(params.user.email);

    if (!temp) {
      throw new Error("User tidak ditemukan");
    }

    const resp = await prisma.expense.create({
      data: {
        title: params.title,
        nominal: params.nominal,
        type: params.type,
        category: params.category,
        date: new Date(params.date),
        user_id: temp.id,
      },
    });

    return resp;
  } catch (err) {
    throw err;
  }
}
