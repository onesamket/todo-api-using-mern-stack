import { TodoModel } from "./schema";

class Todo {
  static savaTodo(title: string, content: string, is_complated = false) {
    const todo = new TodoModel({
      title: title,
      content: content,
      is_complated: is_complated,
    });
    return todo.save();
  }

  getTodos = async () => {
    const todos = await TodoModel.find({});
    return todos;
  };

  deleteTodo = async (id: string) => {
    const deletedTodo = await TodoModel.deleteOne({ _id: id });
    return deletedTodo;
  };
}
export default Todo;
