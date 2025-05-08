import QuizPlayFooter from "../containers/quiz-play-footer";
import QuizPlayQuestions from "../containers/quiz-play-question";
import QuizPlaySideBar from "../containers/quiz-play-sidebar";

function QuizPlay() {
  return (
    <div className="w-full space-y-10 pt-10">
      <div className="flex gap-10">
        <QuizPlaySideBar />
        <QuizPlayQuestions />
      </div>
      <QuizPlayFooter />
    </div>
  );
}

export default QuizPlay;
