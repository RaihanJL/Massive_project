import express from "express";
import dotenv from "dotenv";
import db from "./config/database.js";
import router from "./routes/index.js";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();

cors;
app.use(cors());

try {
  await db.authenticate();
  console.log(`Database Connected...`);
} catch (error) {
  console.log(error);
}

app.use(cookieParser());
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(5000, () => console.log("Server running at port 5000"));
