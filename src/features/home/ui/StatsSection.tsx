import LineStackIcon from "@/shared/icons/lines-stack";
import { Typography } from "antd";

function StatsSection() {
  return (
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
  );
}

export default StatsSection;
