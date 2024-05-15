import { Context } from "@/app/App";
import { useContext } from "react";

export const useAuth = () => {
  const { store } = useContext(Context);

  const handleLogIn = () => {
    const login = prompt("Enter login (admin)");
    store.authStore.login(login);
  };

  const handleLogOut = () => {
    store.authStore.logout();
  };

  const isAuth = store.authStore.isAuth;
  const isLoading = store.authStore.isLoading;

  return { isAuth, isLoading, handleLogIn, handleLogOut };
};
