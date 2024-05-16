import { makeAutoObservable } from "mobx";
import { User } from "@/entities";
import { mockAuth } from "@/shared/lib/mockAuth";

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  user: User;
  isAuth = false;
  isLoading = false;

  setUser(user: User) {
    this.user = user;
  }
  setAuth(bool: boolean) {
    this.isAuth = bool;
  }
  setLoading(bool: boolean) {
    this.isLoading = bool;
  }

  async login(login: string) {
    this.setLoading(true);

    try {
      const response = await mockAuth(login);
      localStorage.setItem("token", response.token);
      this.setAuth(true);
      this.setUser({ login: response.login });
    } catch (e) {
      alert("Invalid login");
      console.error(e);
    } finally {
      this.setLoading(false);
    }
  }

  logout() {
    localStorage.removeItem("token");
    this.setAuth(false);
    this.setUser(null);
  }
}

export const authStore = new AuthStore();
