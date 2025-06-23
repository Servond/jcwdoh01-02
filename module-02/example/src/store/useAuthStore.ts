import { create } from "zustand";
import { User } from "@/features/user/type";

type AuthState = {
  user: User | null;
  isLogin: boolean;
};

type AuthActions = {
  onAuthSuccess: (user: User | null) => void;
  clearAuth: () => void;
};

type AuthStore = AuthState & AuthActions;

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLogin: false,
  onAuthSuccess: (payload) => set(() => ({ user: payload, isLogin: true })),
  clearAuth: () => set(() => ({ user: null, isLogin: false })),
}));

export default useAuthStore;
