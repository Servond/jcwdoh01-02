import express, { Request, Response, NextFunction } from "express";

// ROUTER
import expenseRoute from "./routes/expense.route";

const PORT = 8080;

const app = express();

// MIDDLEWARE
app.use(express.json());

// ROUTE
app.use("/expenses", expenseRoute);

// ERROR HANDLING MIDDLEWARE
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send(err?.message);
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
