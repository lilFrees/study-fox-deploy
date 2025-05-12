import QuizPlayFooter from "../containers/quiz-play-footer";
import QuizPlayQuestion from "../containers/quiz-play-question";
import QuizPlaySideBar from "../containers/quiz-play-sidebar";
import QuizPlayProvider from "../context";

function QuizPlay() {
  return (
    <QuizPlayProvider>
      <div className="w-full space-y-10 pt-10">
        <div className="flex gap-10">
          <QuizPlaySideBar />
          <QuizPlayQuestion />
        </div>
        <QuizPlayFooter />
      </div>
    </QuizPlayProvider>
  );
}

export default QuizPlay;
