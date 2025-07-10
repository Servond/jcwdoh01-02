"use client";

import { useFormikContext } from "formik";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { IExpenseForm } from "../../type";

export default function ExpenseForm() {
  const { values, handleSubmit, getFieldProps, setFieldValue } =
    useFormikContext<IExpenseForm>();

  return (
    <div>
      <div>
        <div>
          <Input {...getFieldProps("title")} type="text" placeholder="Title" />
        </div>
        <div>
          <Input
            {...getFieldProps("nominal")}
            type="number"
            placeholder="Nominal"
          />
        </div>
        <div>
          <Select
            defaultValue="EXPENSE"
            onValueChange={(value) => setFieldValue("type", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent side="bottom">
              <SelectItem value="EXPENSE">EXPENSE</SelectItem>
              <SelectItem value="INCOME">INCOME</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select
            defaultValue="FOOD"
            onValueChange={(value) => setFieldValue("category", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent side="bottom">
              <SelectItem value="SALARY">SALARY</SelectItem>
              <SelectItem value="FOOD">FOOD</SelectItem>
              <SelectItem value="TRANSPORT">TRANSPORT</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Calendar
            mode="single"
            selected={values.date}
            onSelect={(value) => setFieldValue("date", value)}
          />
        </div>
        <div>
          <Button type="submit" onClick={() => handleSubmit()}>
            Create
          </Button>
        </div>
      </div>
    </div>
  );
}
