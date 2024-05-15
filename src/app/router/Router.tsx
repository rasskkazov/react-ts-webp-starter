import { createBrowserRouter } from "react-router-dom";
import Root from "@/pages/layout/Root";
import { Main, TodoPage } from "@/pages";
import ErrorPage from "@/pages/error/ErrorPage";
import { paths } from "@/shared/constant/paths";
export const router = createBrowserRouter([
  {
    path: paths.MAIN,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: paths.MAIN,
        element: <Main />,
        errorElement: <ErrorPage />,
      },
      {
        path: paths.TODO,
        element: <TodoPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
