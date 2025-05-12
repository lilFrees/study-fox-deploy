export interface IQuizResponse {
  quizSectionID: string;
  quizlist: IQuestion[];
  title: string;
}

export interface IQuestion {
  quizId: string;
  question: string;
  choices: string[];
}

export interface IQuestionWithAnswer extends IQuestion {
  questionNumber: number;
  answer: string | null;
}

export interface IStoredQuiz {
  quizSectionID: string;
  quizlist: IQuestionWithAnswer[];
  title: string;
}

export interface IQuizCheckParams {
  quizSectionID: string;
  quizzes: {
    quizId: string;
    answer: string;
  }[];
}
