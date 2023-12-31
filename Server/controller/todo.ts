import Todo from "../model/todo";
import { Request, Response } from "express";

const getTodos = async (req: Request, res: Response) => {
  try {
    const todo = new Todo();
    const todos = await todo.getTodos();
    res.json({ data: todos });
  } catch (error) {
    console.log(error);
    res.status(400).send("Can't fetch data from the server");
  }
};

const createTodo = (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    console.log(req.body);
    Todo.saveTodo(title, content);
    res.status(201).send("Todo created ");
  } catch (error) {
    res.status(400).send({ error: error });
  }
};

const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const todo = new Todo();
    const deletedTodo = await todo.deleteTodo(id);
    res.status(200).json({ deletedTodo: deletedTodo });
  } catch (error) {
    res.status(400).send({ error: error });
  }
};

const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id, title, content } = req.body;
    const todo = new Todo();
    const updatedTodo = await todo.updateTodo(id, title, content);
    res.status(200).json({ updatedTodo: updatedTodo });
  } catch (error) {
    res.status(400).send({ error: error });
  }
};

const todoController = { createTodo, deleteTodo, getTodos, updateTodo };
export default todoController;
