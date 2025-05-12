"use client";

import { useCallback, useState } from "react";

import { Button, Input } from "antd";
import { BsStars } from "react-icons/bs";
import { PiPaperclipHorizontal } from "react-icons/pi";

import { useAuthStore } from "@/shared/store/auth-store";
import { useUploadedFileStore } from "@/shared/store/uploaded-file-store";
import { useRouter } from "next/navigation";

function MainContentUpload() {
  const [text, setText] = useState<string | null>(null);
  const { file, setFile, setTextContent } = useUploadedFileStore();
  const { push } = useRouter();
  const { user } = useAuthStore();

  const handleClick = () => {
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

  const handleSubmit = useCallback(() => {
    if (text === null && file === null) return;
    setTextContent(text);

    if (user !== null) {
      push("/quiz-generation/?source=upload");
    } else {
      push("/auth/sign-up/?source=upload");
    }
  }, [text, file, setTextContent, user, push]);

  return (
    <div className="shadow-primary/50 relative h-16 w-full overflow-hidden rounded-2xl border border-gray-400 shadow-[0_4px_4px] transition-all duration-500 ease-in-out focus-within:h-32 hover:scale-105 dark:shadow-[#702DFF]/50">
      <div className="absolute top-0 -right-5 bottom-0 left-0 overflow-auto">
        <Input.TextArea
          size="large"
          className="mb-0 h-full border-0 bg-white pt-[16px] pr-[140px] pl-10 font-mono text-lg text-black placeholder:text-gray-600"
          placeholder="Choose popular quiz themes"
          rows={5}
          value={text || ""}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <Button
        type="link"
        size="large"
        onClick={handleClick}
        className="absolute top-2 left-0"
      >
        <PiPaperclipHorizontal className="rotate-90 text-lg text-black" />
      </Button>
      <Button
        size="large"
        className="absolute top-2 right-2 rounded-[10px] bg-black text-white"
        type="primary"
        icon={<BsStars className="text-lg" />}
        onClick={handleSubmit}
      >
        Generate
      </Button>
    </div>
  );
}

export default MainContentUpload;
