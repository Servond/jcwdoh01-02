import { Router } from "express";
import { LoginController } from "../controllers/auth.controller";

const router = Router();

router.post("/", LoginController);

export default router;
