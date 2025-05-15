import { Typography } from "antd";

import ContentUpload from "../../quiz-generation/ui/form/ContentUpload";
import StatsSection from "./StatsSection";
import TitleSection from "./TitleSection";

function MainHeading() {
  return (
    <div className="z-20 basis-1/2 space-y-10 pb-[185px]">
      <TitleSection />

      <ContentUpload />

      <Typography.Paragraph
        type="secondary"
        className="cursor-pointer text-right text-sm"
      >
        Try it out with an{" "}
        <span className="text-slate-800 underline dark:text-slate-300">
          example
        </span>
      </Typography.Paragraph>

      <StatsSection />
    </div>
  );
}

export default MainHeading;
