import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import pool from "./db";
// ROUTER
import expenseRoute from "./routes/expense.route";

const PORT = 8080;

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTE
app.get(
  "/expenses",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { category, type } = req.query;
      const response = await pool.query(
        "select * from tracker_expense.expense where category = $1 and type = $2",
        [category, type]
      );

      res.json({
        message: "OK",
        content: response.rows,
      });
    } catch (err) {
      next(err);
    }
  }
);
app.use("/api/expenses", expenseRoute);

// ERROR HANDLING MIDDLEWARE
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send(err?.message);
});

pool.connect((err, client, release) => {
  if (err) return console.log("Error connection to DB");

  console.log("DB connected successfully");
  release();
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
