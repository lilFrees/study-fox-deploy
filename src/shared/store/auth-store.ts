import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface AuthStore {
  user: any;
  setUser: (user: any) => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    { name: "auth-store" },
  ),
);
