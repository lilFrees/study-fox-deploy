"use client";

import { Typography } from "antd";

function QuizPreparePage() {
  return (
    <div className="container flex h-full w-full flex-col items-center justify-center">
      <Typography.Title
        level={2}
        className="text-primary font-sans text-[64px] uppercase"
      >
        Study Fox
      </Typography.Title>
    </div>
  );
}

export default QuizPreparePage;
