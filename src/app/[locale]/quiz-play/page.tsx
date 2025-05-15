import QuizPlayProvider from "@/features/quiz-play/model/QuizContext";
import QuizPlayFooter from "@/features/quiz-play/ui/containers/quiz-play-footer";
import QuizPlayQuestion from "@/features/quiz-play/ui/containers/quiz-play-question";
import QuizPlaySideBar from "@/features/quiz-play/ui/containers/quiz-play-sidebar";

function QuizPlayPage() {
  return (
    <QuizPlayProvider>
      <div className="container mx-auto">
        <div className="w-full space-y-10 pt-10">
          <div className="flex gap-10">
            <QuizPlaySideBar />
            <QuizPlayQuestion />
          </div>
          <QuizPlayFooter />
        </div>
      </div>
    </QuizPlayProvider>
  );
}

export default QuizPlayPage;
