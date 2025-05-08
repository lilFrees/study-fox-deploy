export interface IQuestion {
  quizId: string;
  question: string;
  choices: string[];
}

export interface IQuestionWithAnswer extends IQuestion {
  questionNumber: number;
  answer: string | null;
}
