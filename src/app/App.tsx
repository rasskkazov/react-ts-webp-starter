import * as classes from "./App.module.scss";
import path from "path";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
export const App = () => {
  return <RouterProvider router={router} />;
};
