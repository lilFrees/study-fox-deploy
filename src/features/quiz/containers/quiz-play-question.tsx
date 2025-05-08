"use client";

import { Typography } from "antd";
import { useQuizStore } from "../store/quiz-store";
import QuizOption from "../components/quiz-option";

function QuizPlayQuestions() {
  const { currentQuestion } = useQuizStore();
  return (
    <div className="flex h-full basis-2/3 flex-col">
      <Typography.Title
        level={3}
        className="mb-20 w-full pb-8 font-sans text-2xl"
      >
        Question {currentQuestion?.questionNumber}
      </Typography.Title>

      <Typography.Text className="mb-8 text-lg">
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

export default QuizPlayQuestions;
