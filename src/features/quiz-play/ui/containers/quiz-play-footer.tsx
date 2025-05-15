"use client";

import { Button } from "antd";
import { useQuizContext } from "../../model/QuizContext";

function QuizPlayFooter() {
  const { store, checkQuizMutation } = useQuizContext();
  const { next, prev, currentQuestion, quiz } = store;

  const isFirstQuestion = currentQuestion?.questionNumber === 1;

  const isLastQuestion =
    currentQuestion?.questionNumber === quiz?.quizlist?.length;
  const isAllQuestionsAnswered = quiz?.quizlist?.every(
    (question) => question.answer !== null,
  );
  const shouldFinish = isAllQuestionsAnswered || isLastQuestion;

  const handleFinish = () => {
    if (
      !quiz?.quizSectionID ||
      !quiz?.quizlist.every((q) => q.answer !== null)
    ) {
      return;
    }
    checkQuizMutation.mutate({
      quizSectionID: quiz?.quizSectionID,
      quizzes: quiz?.quizlist
        ?.filter((q) => q.answer !== null)
        ?.map((q) => ({
          quizId: q.quizId,
          answer: q.answer as string,
        })),
    });
  };

  return (
    <div className="flex w-full items-center justify-between border-t border-gray-300 py-10 dark:border-gray-600">
      {!isFirstQuestion && (
        <Button className="w-[215px]" size="large" type="text" onClick={prev}>
          Previous
        </Button>
      )}
      <Button
        className="ml-auto w-[215px]"
        size="large"
        type="text"
        onClick={shouldFinish ? handleFinish : next}
        loading={checkQuizMutation.isPending}
      >
        {shouldFinish ? "Finish" : "Next"}
      </Button>
    </div>
  );
}

export default QuizPlayFooter;
