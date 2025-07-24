import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import { ZodError } from "zod";
import { PORT } from "./config";

// Router
import userRouter from "./routers/user.router";
import expenseRouter from "./routers/expense.router";
import authRouter from "./routers/auth.router";

const port = PORT || 8080;

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/api", (req: Request, res: Response) => {
  res.send("API is running well");
});

// ENDPOINT
app.use("/api/users", userRouter);
app.use("/api/expenses", expenseRouter);
app.use("/api/auth", authRouter);

// ERROR MIDDLEWARE
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ZodError) {
    const message = err.issues.map((error: any) => ({
      message: `${error.path.join(".")} ${error.message}`,
    }));

    res.status(500).json({
      message: "NG",
      detail: message,
    });
  } else {
    res.status(500).json({
      message: "NG",
      detail: err.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
