import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config();

const PORT = process.env.PORT || 3001;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error");
  });
