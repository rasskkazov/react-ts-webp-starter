import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/shared/api/queryClient";
import "./App.scss";
import { createContext } from "react";
import { store } from "./model/RootStore";

export const Context = createContext({
  store,
});

export const App = () => {
  return (
    <Context.Provider value={{ store }}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Context.Provider>
  );
};
