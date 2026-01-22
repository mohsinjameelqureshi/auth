import express from "express";
import cookieParser from "cookie-parser";

const app = express();

//common middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// global error handler
app.use((err, req, res, next) => {
  console.error(err);
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: err.success,
      message: err.message,
      errors: err.errors,
      data: err.data,
      ...(ENV.NODE_ENV === "development" && { stack: err.stack }),
    });
  }
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
    ...(ENV.NODE_ENV === "development" && { stack: err.stack }),
  });
});

// improt routes
import healthRoutes from "./routes/healthcheck.route.js";
import authRoutes from "./routes/auth.route.js";

// routes

// healthcheck
app.use("/api/healthcheck", healthRoutes);

// auth
app.use("/api/auth", authRoutes);
export { app };
