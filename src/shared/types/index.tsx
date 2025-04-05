export interface IUploadedFileStore {
  file: File | null;
  setFile: (file: File | null) => void;
}
