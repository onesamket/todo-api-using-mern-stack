import { Form } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import { createTodo } from "../api/request";
import { useForm } from "react-hook-form";
import { FormSchema, formType } from "../types/zodResolver";
import { zodResolver } from "@hookform/resolvers/zod";

const CreateTodo = () => {
  const {
    register,
    formState: { errors },
  } = useForm<formType>({
    resolver: zodResolver(FormSchema),
  });
  const transition = useNavigation();
  const busy: boolean = transition.state === "submitting";

  return (
    <div>
      <Form method="post">
        <input
          type="text"
          {...register("title")}
          name="title"
          placeholder="todo title "
        />
        {errors.title && <span>{errors.title.message}</span>}
        <textarea
          {...register("content")}
          name="content"
          placeholder="todo content "
        />
        {errors.content && <span>{errors.content?.message}</span>}

        <button type="submit" disabled={busy}>
          {busy ? "adding..." : "add todo"}
        </button>
      </Form>
    </div>
  );
};

export default CreateTodo;

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const response = await createTodo(formData);
  return response;
};
