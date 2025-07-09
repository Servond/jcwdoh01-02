import { Router } from "express";
import {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  getTotalExpense,
} from "../controllers/expense.controller";

const router = Router();

router.get("/", getAll);
router.get("/total-expenses", getTotalExpense);
router.get("/:id", getById);
router.post("/", create);
router.patch("/:id", updateById);
router.delete("/:id", deleteById);

export default router;
