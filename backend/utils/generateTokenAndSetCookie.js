import jwt from "jsonwebtoken";
import { OPTIONS } from "./contants.js";

export const generateTokenAndSetCookie = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("token", token, OPTIONS);
  return token;
};
