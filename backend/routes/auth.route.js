import { Router } from "express";
import {
  logout,
  signup,
  verifyEmail,
  login,
  forgotPassword,
  resetPassword,
  checkAuth,
} from "../controller/auth.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = Router();

router.route("/signup").post(signup);

router.route("/verify-email").post(verifyEmail);

router.route("/login").post(login);

router.route("/logout").get(logout);

router.route("/forgot-password").post(forgotPassword);

router.route("/reset-password/:token").post(resetPassword);

router.route("/check-auth").get(verifyToken, checkAuth);

export default router;
