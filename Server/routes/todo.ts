import { Router } from "express";
import todoColtroller from "../controller/todo";

const todoRouter = Router();
todoRouter.get("/", todoColtroller.getTodos);
todoRouter.post("/", todoColtroller.createTodo);
todoRouter.delete("/", todoColtroller.deleteTodo);
todoRouter.patch("/", todoColtroller.updateTodo);
export default todoRouter;
