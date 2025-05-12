"use client";

import { Typography } from "antd";

function QuizResults() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Typography.Title className="text-2xl">Ooops!</Typography.Title>
      <Typography.Text className="text-lg">Your result is:</Typography.Text>
      <Typography.Text className="">0 out of 10</Typography.Text>
    </div>
  );
}

export default QuizResults;
