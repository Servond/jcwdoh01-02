"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function CreateModal({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Dialog>
      <DialogTrigger type="button">Add New</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>EXPENSE</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
