import { Checkbox } from "antd";
import { twMerge } from "tailwind-merge";
import { useQuizStore } from "../store/quiz-store";

function QuizOption({
  option,
  isChosen,
  quizId,
}: {
  option: string;
  isChosen: boolean;
  quizId: string;
}) {
  const { answerQuestion } = useQuizStore();

  return (
    <Checkbox
      className={twMerge(
        "[&_.ant-checkbox-input]:peer flex-row-reverse items-center justify-between rounded-2xl border-2 p-5 outline-0 transition-all duration-500 after:hidden",
        isChosen
          ? "border-success [&_.ant-checkbox-inner]:bg-success [&_.ant-checkbox-inner]:border-success shadow-[4px_4px_0_#2AB514]"
          : "border-slate-200 shadow-[4px_4px_0_#e2e8f0] hover:border-slate-500 hover:shadow-[4px_4px_0_#62748e]",
      )}
      checked={isChosen}
      onChange={(e) => {
        if (e.target.checked) {
          answerQuestion(quizId, option);
        }
      }}
    >
      {option}
    </Checkbox>
  );
}

export default QuizOption;
