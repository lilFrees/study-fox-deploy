"use client";

import { Button, Typography } from "antd";
import { useQuizStore } from "../store/quiz-store";
import { twMerge } from "tailwind-merge";
import { useEffect } from "react";
import { FaCheck } from "react-icons/fa6";

function QuizPlaySideBar() {
  const { currentQuestion, questions, setCurrentQuestion } = useQuizStore();

  useEffect(() => {
    if (!currentQuestion) {
      setCurrentQuestion(questions[0]);
    }
  }, [currentQuestion, questions, setCurrentQuestion]);

  return (
    <div className="h-full basis-1/3">
      <Typography.Title
        level={3}
        className="w-full px-8 pb-8 font-sans text-2xl"
      >
        Quiz Topic Title
      </Typography.Title>
      <div className="relative h-[600px] overflow-hidden rounded-3xl bg-[#D9D9D9] dark:bg-[#2D2D2D]">
        <div className="absolute top-0 -right-[13px] bottom-0 left-0 h-full overflow-auto pr-[13px]">
          <div className="flex flex-col px-4 py-8">
            {questions?.map((question) => {
              const isAnswered = question.answer !== null;
              const isCurrent = question.quizId === currentQuestion?.quizId;
              return (
                <Button
                  key={question.quizId}
                  className={twMerge(
                    "flex h-auto w-full items-center justify-between p-2 hover:bg-slate-700/20 dark:hover:bg-slate-200/20",
                    isCurrent && "bg-slate-600/10 dark:bg-slate-300/10",
                  )}
                  type="link"
                  onClick={() => setCurrentQuestion(question)}
                >
                  <Typography.Text
                    className={twMerge(
                      "font-sans text-lg font-medium transition-all duration-200",
                      isAnswered
                        ? "text-slate-700 dark:text-white"
                        : "text-black/40 dark:text-white/40",
                    )}
                  >
                    Question {question?.questionNumber}
                  </Typography.Text>
                  <div
                    className={twMerge(
                      "flex h-6 w-6 items-center justify-center rounded-full",
                      isAnswered
                        ? "bg-primary"
                        : "border border-slate-500 dark:border-slate-400",
                    )}
                  >
                    {isAnswered && <FaCheck className="text-background" />}
                  </div>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizPlaySideBar;
