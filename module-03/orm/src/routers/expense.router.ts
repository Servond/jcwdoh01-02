import { Router } from "express";
import {
  createExpenseController,
  getExpenseListController,
} from "../controllers/expense.controller";

import { createExpenseSchema } from "../schemas/expense.schema";

import { verifyToken, adminGuard } from "../middlewares/auth.middleware";
import validate from "../middlewares/validator.middleware";

const router = Router();

router.use(verifyToken);

router.post(
  "/",
  adminGuard,
  validate(createExpenseSchema),
  createExpenseController
);
router.get("/", getExpenseListController);

export default router;
