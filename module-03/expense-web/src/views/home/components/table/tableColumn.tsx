import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

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
      cell: ({ row }) => {
        const expense = row.original;

        return <Button>Delete</Button>;
      },
    },
  ];

  return columns;
}
