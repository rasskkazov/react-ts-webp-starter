import { createBrowserRouter } from "react-router-dom";
import Root from "@/pages/layout/Root";
import { Main, Secondary } from "@/pages";
import ErrorPage from "@/pages/error/ErrorPage";
import { paths } from "@/shared/constant/paths";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: paths.MAIN,
        element: <Main />,
        errorElement: <ErrorPage />,
      },
      {
        path: `${paths.SECOND}/:secondId`,
        element: <Secondary />,
        errorElement: <ErrorPage />,
      },
      {
        path: `${paths.SECOND}`,
        element: <Secondary />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
