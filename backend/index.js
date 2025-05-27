import express from "express";
import dotenv from "dotenv";
import student from "./src/routes/studentRoute.js";
import { connectDB } from "./src/utils/connectDB.js";
import cors from "cors";
const app = express();
dotenv.config();
await connectDB();
app.use(express.json()); //body parser
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://student-management-app-eosin.vercel.app"
    ],
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.use("/api/v1", student);
app.get("/api/v1", (req, res) => {
  res.send({ status: true });
});
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
