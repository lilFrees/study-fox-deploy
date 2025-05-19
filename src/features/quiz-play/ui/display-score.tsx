"use client";

import { Button, Typography } from "antd";
import { useQuizStore } from "../../../entities/quiz/model/useQuizStore";
import { useRouter } from "next/navigation";
import { useTimeStore } from "../../../entities/quiz/model/useTimeStore";

function QuizResults() {
  const { result, restart } = useQuizStore();
  const { setTime } = useTimeStore();
  const { push } = useRouter();

  const tryAgainHandler = () => {
    restart();
    setTime(null);
  };

  return (
    <div className="mt-28 flex flex-col items-center justify-center gap-10">
      <Typography.Title className="text-6xl">
        {result?.passed ? "Congratulations" : "Ooops!"}
      </Typography.Title>
      <Typography.Text className="text-4xl">Your result is:</Typography.Text>
      <Typography.Text className="text-8xl">
        {result?.correctAnsweredQuestions} out of {result?.totalQuestions}
      </Typography.Text>
      <div className="mt-20 flex w-full justify-center gap-10">
        <Button
          type="dashed"
          size="large"
          className="w-[400px]"
          onClick={tryAgainHandler}
        >
          Try Again
        </Button>
        <Button
          type="dashed"
          size="large"
          className="w-[400px]"
          onClick={() => push("/account/home")}
        >
          Back to home
        </Button>
      </div>
    </div>
  );
}

export default QuizResults;
