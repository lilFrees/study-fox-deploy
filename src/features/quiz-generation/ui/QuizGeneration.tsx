"use client";

import { AnimatePresence } from "motion/react";

import useQuizGeneration from "../model/useQuizGeneration";
import LoadingState from "./LoadingState";
import SuccessState from "./SuccessState";

function QuizGeneration() {
  const { isSuccess, isLoading } = useQuizGeneration();
  const progress = isSuccess ? 100 : isLoading ? 50 : 0;

  return (
    <div>
      <AnimatePresence mode="wait">
        {progress < 100 && <LoadingState progress={progress} />}
        {progress === 100 && <SuccessState />}
      </AnimatePresence>
    </div>
  );
}

export default QuizGeneration;
