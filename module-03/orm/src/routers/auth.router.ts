import { Router } from "express";
import {
  LoginController,
  ForgotPasswordController,
  ChangePasswordController,
} from "../controllers/auth.controller";
import { verifyTokenForgotPassword } from "../middlewares/auth.middleware";

const router = Router();

router.post("/", LoginController);
router.post("/forgot-password", ForgotPasswordController);
router.post(
  "/change-password",
  verifyTokenForgotPassword,
  ChangePasswordController
);
export default router;
