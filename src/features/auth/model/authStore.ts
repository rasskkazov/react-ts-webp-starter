import { User } from "@/entities";
import { mockAuth } from "@/shared/lib/mockAuth";
import { makeAutoObservable } from "mobx";

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  user: User;
  isAuth = false;
  isLoading = false;

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }
  setUser(user: User) {
    this.user = user;
  }
  setLoading(bool: boolean) {
    this.isLoading = bool;
  }

  async login(login: string) {
    try {
      this.setLoading(true);
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
    try {
      localStorage.removeItem("token");
      this.setAuth(false);
      this.setUser(null);
    } catch (e) {
      console.error(e);
    }
  }
}

export const authStore = new AuthStore();
