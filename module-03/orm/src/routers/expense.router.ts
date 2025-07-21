import { Router } from "express";
import {
  createExpenseController,
  getExpenseListController,
} from "../controllers/expense.controller";
import { verifyToken, adminGuard } from "../middlewares/auth.middleware";

const router = Router();

router.use(verifyToken);

router.post("/", adminGuard, createExpenseController);
router.get("/", getExpenseListController);

export default router;
