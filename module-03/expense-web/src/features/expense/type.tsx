export interface Expense {
  id: number;
  title: string;
  nominal: number;
  type: "EXPENSE" | "INCOME";
  category: "SALARY" | "FOOD" | "TRANSPORT";
  date: Date;
}
