import { useAuthStore } from "@/entities/user/model/useAuthStore";
import { useUploadedFileStore } from "@/shared/store/uploaded-file-store";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function useContentUpload() {
  const [text, setText] = useState<string | null>(null);
  const { file, setFile, setTextContent } = useUploadedFileStore();
  const { push } = useRouter();
  const { user } = useAuthStore();

  const handleUpload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".txt,.pdf";
    input.onchange = (event) => {
      const file = (event.target as HTMLInputElement)?.files?.[0];
      const fileReader = new FileReader();

      fileReader.onload = (ev) => {
        const content = ev.target?.result;
        setFile({ name: "uploaded", url: content as string });
      };
      fileReader.readAsDataURL(file as Blob);
    };
    input.click();
  };

  const handleSubmit = () => {
    if (text === null && file === null) return;
    setTextContent(text);

    if (user !== null) {
      push("/quiz-generation/?source=upload");
    } else {
      push("/auth/sign-up/?source=upload");
    }
  };

  return {
    text,
    setText,
    handleUpload,
    handleSubmit,
    file,
    setFile,
    setTextContent,
  };
}
