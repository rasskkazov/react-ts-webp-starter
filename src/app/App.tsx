import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { router } from "./router/Router";

import { queryClient } from "@/shared/api/queryClient";

import "@/shared/locales/i18n";
import "./App.scss";

export const App = () => {
  const { t, i18n } = useTranslation();

  return (
    <Suspense fallback="...Loading">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Suspense>
  );
};
