import { Router } from "express";
import {
  createUserController,
  getUserDetailController,
} from "../controllers/user.controller";
import uploader from "../middlewares/uploader.middleware";

const router = Router();

router.post("/", uploader().single("avatar"), createUserController);
router.post("/detail", getUserDetailController);

export default router;
