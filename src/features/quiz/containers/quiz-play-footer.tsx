"use client";

import { Button } from "antd";
import { useQuizStore } from "../store/quiz-store";

function QuizPlayFooter() {
  const { next, prev } = useQuizStore();
  return (
    <div className="flex w-full items-center justify-between border-t border-gray-300 py-10 dark:border-gray-600">
      <Button className="w-[215px]" size="large" type="text" onClick={prev}>
        Previous
      </Button>
      <Button className="w-[215px]" size="large" type="text" onClick={next}>
        Next
      </Button>
    </div>
  );
}

export default QuizPlayFooter;
