import { ColumnDef } from "@tanstack/react-table";
import { Expense } from "@/features/expense/type";

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export interface IExpenseForm {
  title: string;
  nominal: number;
  type: string;
  category: string;
  date: Date;
}
