import QuizGeneration from "@/features/quiz-generation/ui/QuizGeneration";
import LoadingLogo from "@/shared/ui/loading-logo";
import { Suspense } from "react";

function QuizGenerationPage() {
  return (
    <div className="container mx-auto">
      <Suspense fallback={<LoadingLogo />}>
        <QuizGeneration />
      </Suspense>
    </div>
  );
}

export default QuizGenerationPage;
