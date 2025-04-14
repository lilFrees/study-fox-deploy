import { Button, Input, Typography } from "antd";
import { BsStars } from "react-icons/bs";
import { PiPaperclipHorizontal } from "react-icons/pi";

import { useUploadedFileStore } from "@/shared/store/uploaded-file-store";

import LineStackIcon from "@/shared/icons/lines-stack";

function MainHeading() {
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
    <div className="z-20 basis-1/2 space-y-10 pb-[185px]">
      <Typography.Title
        level={1}
        className="font-mono text-6xl leading-[66px] font-normal"
      >
        Generate special <br /> quizzes from <br /> your own file or choose
        popular <br /> ones.
      </Typography.Title>
      <Typography.Paragraph className="text-base" type="secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Vehicula
        massa in enim luctus. Rutrum arcu.
      </Typography.Paragraph>
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

      <Typography.Paragraph
        type="secondary"
        className="cursor-pointer text-right text-sm"
      >
        Try it out with an{" "}
        <span className="text-slate-700 underline">example</span>
      </Typography.Paragraph>

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
  );
}

export default MainHeading;
