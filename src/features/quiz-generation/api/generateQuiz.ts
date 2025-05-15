import request from "@/shared/utils/axios";
import { IQuizResponse } from "../types";

export async function generateQuizWithContext(params: {
  quizCount: number;
  context: string;
  username: string;
}): Promise<IQuizResponse> {
  const { username, ...data } = params;
  const res: IQuizResponse = await request({
    url: `/quiz-service/quiz/${username}/generate`,
    method: "POST",
    data,
  });
  return res;
}

export async function generateQuizWithFile(params: {
  username: string;
  data: FormData;
}): Promise<IQuizResponse> {
  const { username, data } = params;
  const res: IQuizResponse = await request({
    url: `/quiz-service/quiz/${username}/document-generate`,
    method: "POST",
    data,
  });
  return res;
}
