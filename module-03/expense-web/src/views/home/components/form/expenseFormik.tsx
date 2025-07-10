"use client";

import { Formik } from "formik";
import ExpenseForm from "./expenseForm";
import { IExpenseForm } from "../../type";
import { createExpense } from "@/features/expense/api";
export default function ExpenseFormik() {
  const handleSubmit = async (values: IExpenseForm) => {
    try {
      const response = await createExpense(values);

      alert(response.messsage);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Formik<IExpenseForm>
      initialValues={{
        title: "",
        nominal: 0,
        type: "EXPENSE",
        category: "FOOD",
        date: new Date(),
      }}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      <ExpenseForm />
    </Formik>
  );
}
