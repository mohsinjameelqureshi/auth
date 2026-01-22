export const DB_NAME = "nodejs-auth";

export const OPTIONS = {
  httpOnly: true, // prevent XSS attacks: cross-site scripting
  secure: process.env.NODE_ENV === "production" ? true : false,
  sameSite: "strict", // CSRF attacks
  maxAge: 7 * 24 * 60 * 60 * 1000,
};
