import { Router } from "express";
import {
  logout,
  signup,
  verifyEmail,
  login,
} from "../controller/auth.controller.js";

const router = Router();

router.route("/signup").post(signup);

router.route("/verify-email").post(verifyEmail);

router.route("/login").post(login);

router.route("/logout").get(logout);

export default router;
