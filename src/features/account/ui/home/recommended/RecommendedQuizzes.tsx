import { Typography } from "antd";
import ViewAllButton from "@/widgets/ViewAllButton";
import RecommendedQuizTable from "./RecommendedQuizTable";

function RecommendedQuizzes() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <Typography.Title level={3} className="text-2xl font-semibold">
          Recommended For You
        </Typography.Title>
        <ViewAllButton />
      </div>
      <RecommendedQuizTable />
    </div>
  );
}

export default RecommendedQuizzes;
