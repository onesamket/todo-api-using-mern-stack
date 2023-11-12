import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import connectToDB from "./config/database";
import todoRouter from "./routes/todo";
const app: Express = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;
connectToDB();
app.get("/", (req, res) => {
  res.send("I'm Server what do you want?");
});
app.use("/todo", todoRouter);
app.listen(PORT, () => console.log("Server Running..."));
