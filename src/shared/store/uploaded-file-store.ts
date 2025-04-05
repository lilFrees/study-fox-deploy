import { create } from "zustand";
import { IUploadedFileStore } from "../types";

export const useUploadedFileStore = create<IUploadedFileStore>((set) => ({
  file: null,
  setFile: (file: File | null) => set({ file }),
}));
