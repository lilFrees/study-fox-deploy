import request from "@/shared/utils/axios";
import {
  IQuizCheckParams,
  IQuizCheckResponse,
} from "../../../entities/quiz/types";

export async function getQuizResult(
  data: IQuizCheckParams,
): Promise<IQuizCheckResponse> {
  return await request({
    url: "/quiz-service/quiz/check",
    method: "POST",
    data,
  });
}
