import { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";

const filePath = path.join(__dirname, "../db/db.json");

interface IExpense {
  id: number;
  title: string;
  nominal: number;
  type: "INCOME" | "EXPENSE";
  category: "SALARY" | "FOOD" | "TRANSPORT";
  date: Date;
}

interface getTotalExpenseArgs {
  dateFrom?: string;
  dateTo?: string;
  category?: string;
}
export async function readJSON() {
  try {
    const json = fs.readFileSync(filePath, "utf-8");

    let { expense }: { expense: IExpense[] } = await JSON.parse(json);
    return expense;
  } catch (err) {
    throw err;
  }
}

export async function writeJSON(expenses: IExpense[]) {
  try {
    fs.writeFileSync(
      filePath,
      JSON.stringify({ expense: expenses }, null, 2),
      "utf-8"
    );
  } catch (err) {
    throw err;
  }
}

export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await readJSON();

    res.json({
      message: "OK",
      data: response,
    });
  } catch (err) {
    next(err);
  }
}

export async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;

    const response = await readJSON();

    let findExpense = response.filter((i) => i.id === Number(id))[0];

    if (!findExpense) throw new Error("Data not found");

    res.json({
      message: "OK",
      data: findExpense,
    });
  } catch (err) {
    next(err);
  }
}

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await readJSON();

    const newExpense = {
      ...req.body,
      id: response.length + 1,
      date: new Date(req.body.date),
    };
    response.push(newExpense);

    await writeJSON(response);

    res.json({
      message: "OK",
    });
  } catch (err) {
    next(err);
  }
}

export async function updateById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;

    const response = await readJSON();

    const index = response.findIndex((i) => i.id === Number(id));
    console.log(index);
    if (index < 0) throw new Error("Data not found");

    const expense = response.filter((i) => i.id === Number(id))[0];
    response.splice(index, 1);

    const editExpense = {
      ...expense,
      ...req.body,
    };
    response.splice(index, 0, editExpense);

    await writeJSON(response);

    res.json({
      message: "OK",
    });
  } catch (err) {
    next(err);
  }
}

export async function deleteById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;

    const response = await readJSON();

    const index = response.findIndex((i) => i.id === Number(id));

    if (index < 0) throw new Error("Data not found");

    response.splice(index, 1);

    await writeJSON(response);

    res.json({
      message: "OK",
    });
  } catch (err) {
    next(err);
  }
}

export async function getTotalExpense(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { dateFrom, dateTo, category }: getTotalExpenseArgs = req.query;
    let splitCategory = category?.split(", ");
    console.log(splitCategory);
    let response = await readJSON();

    response = response.filter((i) => i.type === "EXPENSE");

    if (dateFrom && dateTo) {
      response = response.filter(
        (i) =>
          new Date(i.date).getTime() >= new Date(dateFrom).getTime() &&
          new Date(i.date).getTime() <= new Date(dateTo).getTime()
      );
    }

    let newArr: IExpense[] = [];
    if (category) {
      splitCategory?.map((item) => {
        let temp = response.filter((i) => i.category === item);
        newArr.push(...temp);
      });
    } else {
      newArr = [...response];
    }

    let totalExpense = 0;
    newArr.map((item) => (totalExpense += item.nominal));

    res.json({
      message: "OK",
      data: {
        totalExpense,
        newArr,
      },
    });
  } catch (err) {
    next(err);
  }
}
