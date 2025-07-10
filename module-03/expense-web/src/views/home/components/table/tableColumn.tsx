import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { Expense } from "@/features/expense/type";

export default function TableColumn() {
  const columns: ColumnDef<Expense>[] = [
    {
      accessorKey: "title",
      header: "TITLE",
    },
    {
      accessorKey: "nominal",
      header: "NOMINAL",
    },
    {
      accessorKey: "type",
      header: "TYPE",
    },
    {
      accessorKey: "category",
      header: "CATEGORY",
    },
    {
      header: "ACTION",
    },
  ];

  return columns;
}
