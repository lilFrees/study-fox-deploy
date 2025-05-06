import request from "@/shared/utils/axios";
import { IQuestion } from "../types";

export async function generateQuizWithContext(params: {
  quizCount: number;
  context: string;
  username: string;
}): Promise<IQuestion[]> {
  const { username, ...data } = params;
  const res: IQuestion[] = await request({
    url: `/quiz-service/quiz/${username}/generate`,
    method: "POST",
    data,
  });
  return res;
}

export async function generateQuizWithFile(params: {
  username: string;
  data: FormData;
}): Promise<any> {
  const { username, data } = params;
  return await request({
    url: `/quiz-service/quiz/${username}/document-generate`,
    method: "POST",
    data,
  });
}
