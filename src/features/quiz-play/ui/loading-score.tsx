"use client";

import { Typography } from "antd";

function QuizCompleteLoading() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Typography.Title className="text-2xl font-semibold">
        Time is up
      </Typography.Title>
      <Typography.Text className="font-semibold">
        You will see the results in a moment
      </Typography.Text>
    </div>
  );
}

export default QuizCompleteLoading;
