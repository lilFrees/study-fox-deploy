import { Typography } from "antd";

import LineStackIcon from "@/shared/icons/lines-stack";
import MainContentUpload from "../components/main-content-upload";

function MainHeading() {
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
      <MainContentUpload />
      <Typography.Paragraph
        type="secondary"
        className="cursor-pointer text-right text-sm"
      >
        Try it out with an{" "}
        <span className="text-slate-800 underline dark:text-slate-300">
          example
        </span>
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
