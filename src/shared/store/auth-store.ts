import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IUser } from "../types";

export interface AuthStore {
  user: IUser | null;
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
