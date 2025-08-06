import express, { Request, Response } from "express";

const PORT = 8080;

const app = express();

app.get("/api", (req: Request, res: Response) => {
  res.send("This is Express API");
});

app.get("/api", (req: Request, res: Response) => {
  res.send("This is GET Express API");
});

app.get("/api/users", (req: Request, res: Response) => {
  res.json({
    user: "Budi",
  });
});

app.post("/api/blogs", (req: Request, res: Response) => {
  res.send("This is POST Express API");
});

app.delete("/api", (req: Request, res: Response) => {
  res.send("This is DELETE Express API");
});

app.patch("/api", (req: Request, res: Response) => {
  res.send("This is PATCH Express API");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
