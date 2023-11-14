import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Todos, { loader as notesLoader } from "./components/Todos.tsx";
import CreateTodo, {
  action as createAction,
} from "./components/CreateTodo.tsx";
import Skeleton from "./components/Skeleton.tsx";
import Layout from "./Layout.tsx";
import Error from "./components/Error.tsx";
import Auth from "./components/Auth.tsx";
import Category from "./components/Category.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        loader: notesLoader,
        path: "/todos",
        element: <Todos />,
      },
      {
        action: createAction,
        path: "/create",
        element: <CreateTodo />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} fallbackElement={<Skeleton />} />
);
