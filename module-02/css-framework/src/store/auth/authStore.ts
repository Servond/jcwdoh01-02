import { create } from "zustand";

export interface User {
  email: string;
  firstname: string;
  lastname: string;
}

type AuthState = {
  user: User | null;
};

type AuthActions = {
  onLoginSuccess: (user: User | null) => void;
  clearAuth: () => void;
};

type AuthStore = AuthState & AuthActions;

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  onLoginSuccess: (payload) => {
    set(() => ({ user: payload }));
    // localStorage.setItem(
    //   "local",
    //   ((payload?.firstname as string) + payload?.lastname) as string
    // );
    sessionStorage.setItem(
      "session",
      ((payload?.firstname as string) + payload?.lastname) as string
    );
  },
  clearAuth: () => {
    set(() => ({ user: null }));
    localStorage.removeItem("local");
    sessionStorage.removeItem("session");
  },
}));

export default useAuthStore;
