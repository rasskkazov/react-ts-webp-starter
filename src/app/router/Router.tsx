import { createBrowserRouter } from "react-router-dom";
import { PrivatePage, Root, ErrorPage, Main, TodoPage } from "@/pages";
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
      {
        path: paths.PRIVATE,
        element: <PrivatePage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
