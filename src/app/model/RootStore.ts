import { AuthStore } from "@/features";

class RootStore {
  authStore: AuthStore;

  constructor() {
    this.authStore = new AuthStore();
  }
}

export const store = new RootStore();
