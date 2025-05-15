import { IQuestion } from "@/entities/quiz/types";

export interface IQuizResponse {
  quizSectionID: string;
  quizlist: IQuestion[];
  title: string;
}
