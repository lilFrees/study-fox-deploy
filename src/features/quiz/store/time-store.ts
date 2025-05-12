import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ITimeStore {
  time: Date | null;
  setTime: (time: Date | null) => void;
}

export const useTimeStore = create<ITimeStore>()(
  persist(
    (set) => ({
      time: null,
      setTime: (time) => set({ time }),
    }),
    { name: "time-store" },
  ),
);
