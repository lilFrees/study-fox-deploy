"use client";

import { Progress, Typography } from "antd";
import { useMemo } from "react";
import QuizOption from "../quiz-option";
import { useQuizContext } from "../../model/QuizContext";

function QuizPlayQuestion() {
  const { store, timerStore: timer } = useQuizContext();

  const { currentQuestion, quiz, mode } = store;

  const timerStore = timer;

  const currentTime = useMemo(
    () =>
      timerStore !== undefined &&
      `${timerStore.minutes.toString().padStart(2, "0")}:${timerStore.seconds.toString().padStart(2, "0")}`,
    [timerStore],
  );

  return (
    <div className="basis-2/3">
      <div className="mb-20 flex w-full items-center justify-between">
        <Typography.Title level={3} className="w-full font-sans text-2xl">
          Question {currentQuestion?.questionNumber}
        </Typography.Title>
        {mode === "timed" && (
          <Progress
            className="h-[150px] w-[150px] rounded-full"
            percent={
              timerStore
                ? (timerStore?.totalSeconds /
                    ((quiz?.quizlist?.length || 0) * 60)) *
                  100
                : 0
            }
            type="dashboard"
            strokeColor="#ff3718"
            format={() => currentTime}
            size={150}
            strokeWidth={10}
            strokeLinecap="round"
          />
        )}
      </div>

      <Typography.Text className="mb-8 block text-lg">
        {currentQuestion?.question}
      </Typography.Text>

      <div className="flex flex-col gap-5">
        {currentQuestion?.choices?.map((choice, i) => {
          return (
            <QuizOption
              option={choice}
              key={i}
              isChosen={currentQuestion.answer === choice}
              quizId={currentQuestion.quizId}
            />
          );
        })}
      </div>
    </div>
  );
}

export default QuizPlayQuestion;
