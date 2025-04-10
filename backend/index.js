import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import cors from "cors";

dotenv.config();

const app = express();

//Using middlewares
app.use(express.json());
app.use(cors())

//Importing Routes
import userRoutes from "./routes/userRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";

//Using Routes
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  connectDB();
});
