"use client";

import LineStackIcon from "@/shared/icons/lines-stack";
import { useUploadedFileStore } from "@/shared/store/uploaded-file-store";
import { Button, Input, Typography } from "antd";
import Image from "next/image";
import { BsStars } from "react-icons/bs";
import { PiPaperclipHorizontal } from "react-icons/pi";

function MainPage() {
  const { setFile } = useUploadedFileStore();

  const handleClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.onchange = (event) => {
      const file = (event.target as HTMLInputElement)?.files?.[0];
      if (file) {
        setFile(file);
      }
    };
    input.click();
  };

  return (
    <div className="container mx-auto mt-10 flex gap-5 px-2">
      <div className="basis-1/2 space-y-10 pb-[185px]">
        <Typography.Title
          level={1}
          className="font-mono text-6xl leading-[66px] font-normal"
        >
          Generate special <br /> quizzes from <br /> your own file or choose
          popular <br /> ones.
        </Typography.Title>
        <Typography.Paragraph className="text-base" type="secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
          Vehicula massa in enim luctus. Rutrum arcu.
        </Typography.Paragraph>
        <Input
          size="large"
          className="h-[72px] border border-gray-600 bg-white font-mono text-lg placeholder:text-gray-600"
          placeholder="Choose popular quiz themes"
          suffix={
            <Button
              size="large"
              className="bg-black text-white"
              type="primary"
              icon={<BsStars className="text-lg" />}
            >
              Generate
            </Button>
          }
          prefix={
            <Button type="text" size="large" onClick={handleClick}>
              <PiPaperclipHorizontal className="rotate-90 text-lg text-black" />
            </Button>
          }
        />

        <div className="flex items-center gap-5">
          <Typography.Text className="font-sans text-[42px] font-medium">
            1234
          </Typography.Text>
          <Typography.Text>
            Cards <br /> Reviewed
          </Typography.Text>
          <LineStackIcon className="text-primary text-4xl" />
          <Typography.Text className="font-sans text-[42px] font-medium">
            1M+
          </Typography.Text>
          <Typography.Text>
            Quizzes <br /> Generated
          </Typography.Text>
        </div>
      </div>
      <div className="relative basis-1/2 self-center">
        <Image
          src="/eclipse.png"
          alt="Eclipse"
          fill
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
}

export default MainPage;
