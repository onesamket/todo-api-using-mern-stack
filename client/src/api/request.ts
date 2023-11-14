import { TodoTypes } from "../types/types";
import { api } from "./url";

export const getNotes = async () => {
  try {
    const result = await api.get("todo");
    console.log(result);
    return result as unknown as TodoTypes;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createTodo = async (_FormData: FormData) => {
  const result = await api.post(
    "todo",
    { _FormData },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return result;
};
