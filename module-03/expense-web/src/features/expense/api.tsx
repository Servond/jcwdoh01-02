import axios from "@/lib/axios";

import { IExpenseForm } from "@/views/home/type";

export async function getAllExpenses() {
  try {
    const { data } = await axios.get("/expenses");

    return data;
  } catch (err) {
    throw err;
  }
}

export async function createExpense(params: IExpenseForm) {
  try {
    const { data } = await axios.post("/expenses", {
      ...params,
    });

    return data;
  } catch (err) {
    throw err;
  }
}
