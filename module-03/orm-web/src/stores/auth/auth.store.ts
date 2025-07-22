import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { User } from "@/features/user/types";

type AuthState = {
  user: User | null;
};

type AuthActions = {
  onSuccess: (user?: User | null) => void;
  clearAuth: () => void;
};

type AuthStore = AuthState & AuthActions;

const useAuthStore = create<
  AuthStore,
  [["zustand/persist", Pick<AuthStore, "user">]]
>(
  persist(
    (set) => ({
      user: null,
      onSuccess: (payload) => set(() => ({ user: payload })),
      clearAuth: () => set(() => ({ user: null })),
    }),
    {
      name: "asg",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user,
      }),
    }
  )
);

export default useAuthStore;
