import { authStore } from "../model/authStore";

export const useAuth = () => {
  const handleLogIn = () => {
    const login = prompt("Enter login (admin)");
    authStore.login(login);
  };

  const handleLogOut = () => {
    authStore.logout();
  };

  const isAuth = authStore.isAuth;
  const isLoading = authStore.isLoading;

  return { isAuth, isLoading, handleLogIn, handleLogOut };
};
