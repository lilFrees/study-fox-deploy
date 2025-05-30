import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface IUploadedFile {
  name: string;
  url: string;
}

export interface IUploadedFileStore {
  file: IUploadedFile | null;
  setFile: (file: IUploadedFile | null) => void;
  textContent: string | null;
  setTextContent: (textContent: string | null) => void;
}

export const useUploadedFileStore = create<IUploadedFileStore>()(
  persist(
    (set) => ({
      file: null,
      setFile: (file) => set({ file }),
      textContent: null,
      setTextContent: (textContent) => set({ textContent }),
    }),
    { name: "uploaded-study-material" },
  ),
);
