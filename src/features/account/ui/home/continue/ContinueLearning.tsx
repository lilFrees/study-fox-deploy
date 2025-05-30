import ViewAllButton from "@/shared/ui/ViewAllButton";
import { Typography } from "antd";
import ContinueLessons from "./ContinueLessons";

function ContinueLearning() {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="flex w-full items-center justify-between">
        <Typography.Title level={3} className="text-2xl font-semibold">
          Continue Learning
        </Typography.Title>
        <ViewAllButton />
      </div>
      <ContinueLessons />
    </div>
  );
}

export default ContinueLearning;
