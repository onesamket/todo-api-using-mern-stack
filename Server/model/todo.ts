import { TodoModel } from "./schema";

class Todo {
  static saveTodo = async (
    title: string,
    content: string,
    is_completed = false
  ) => {
    try {
      const todo = new TodoModel({
        title: title,
        content: content,
        is_completed: is_completed,
      });
      return await todo.save();
    } catch (error) {
      console.error("Error saving todo:", error);
      throw error;
    }
  };

  getTodos = async () => {
    try {
      const todos = await TodoModel.find({});
      return todos;
    } catch (error) {
      console.error("Error fetching todos:", error);
      throw error;
    }
  };

  deleteTodo = async (id: string) => {
    try {
      const deletedTodo = await TodoModel.deleteOne({ _id: id });
      return deletedTodo;
    } catch (error) {
      console.error("Error deleting todo:", error);
      throw error;
    }
  };

  updateTodo = async (id: string, title: string, content: string) => {
    try {
      const updatedTodo = await TodoModel.findOneAndUpdate(
        { _id: id },
        { $set: { title, content } }
      );
      return updatedTodo;
    } catch (error) {
      console.error("Error updating todo:", error);
      throw error;
    }
  };
}

export default Todo;
