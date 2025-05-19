"use client";

import { AnimatePresence } from "motion/react";

import useQuizGeneration from "../model/useQuizGeneration";

import LoadingState from "./LoadingState";
import SuccessState from "./SuccessState";

function QuizGeneration() {
  const { loadingProgress } = useQuizGeneration();

  return (
    <div>
      <AnimatePresence mode="wait">
        {loadingProgress < 100 && <LoadingState progress={loadingProgress} />}
        {loadingProgress === 100 && <SuccessState />}
      </AnimatePresence>
    </div>
  );
}

export default QuizGeneration;
