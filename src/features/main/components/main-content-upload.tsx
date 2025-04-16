"use client";

import { useUploadedFileStore } from "@/shared/store/uploaded-file-store";
import { Button, Input } from "antd";
import { BsStars } from "react-icons/bs";
import { PiPaperclipHorizontal } from "react-icons/pi";

function MainContentUpload() {
  const setFile = useUploadedFileStore((state) => state.setFile);

  const handleClick = () => {
    const input = document.createElement("input");
    input.type = "file";
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

  return (
    <div className="relative transition-all duration-500 ease-in-out hover:scale-105">
      <Input.TextArea
        size="large"
        className="shadow-primary mb-0 h-16 scroll-pr-10 rounded-2xl border border-gray-400 bg-white pt-4 pl-10 font-mono text-lg text-black shadow-[0_4px_4px] transition-all duration-500 ease-in-out placeholder:text-gray-600 focus:h-28 dark:shadow-[#702DFF]"
        placeholder="Choose popular quiz themes"
        rows={5}
      />
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
      >
        Generate
      </Button>
    </div>
  );
}

export default MainContentUpload;
