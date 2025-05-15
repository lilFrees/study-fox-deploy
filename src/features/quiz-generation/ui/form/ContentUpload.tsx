"use client";

import { useContentUpload } from "../../model/useContentUpload";

import FileUploadButton from "./FileUploadButton";
import GenerateButton from "./GenerateButton";
import TextInput from "./TextInput";

function ContentUpload() {
  const { text, setText, handleUpload, handleSubmit } = useContentUpload();

  return (
    <div className="shadow-primary/50 relative h-16 w-full overflow-hidden rounded-2xl border border-gray-400 shadow-[0_4px_4px] transition-all duration-500 ease-in-out focus-within:h-32 hover:scale-105 dark:shadow-[#702DFF]/50">
      <div className="absolute top-0 -right-5 bottom-0 left-0 overflow-auto">
        <TextInput onChange={setText} value={text} />
      </div>
      <FileUploadButton onClick={handleUpload} />
      <GenerateButton onClick={handleSubmit} />
    </div>
  );
}

export default ContentUpload;
