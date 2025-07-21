import { Router } from "express";
import {
  createUserController,
  getUserDetailController,
} from "../controllers/user.controller";

const router = Router();

router.post("/", createUserController);
router.post("/detail", getUserDetailController);

export default router;
