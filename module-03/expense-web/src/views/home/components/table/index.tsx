import TableView from "./tableView";
import TableColumn from "./tableColumn";

import { getAllExpenses } from "@/features/expense/api";

import { Expense } from "@/features/expense/type";

export default async function ExpenseTable() {
  const expenses = await getAllExpenses();
  const columns = TableColumn();

  return (
    <div>
      <TableView columns={columns} data={expenses?.data} />
    </div>
  );
}
