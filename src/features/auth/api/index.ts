import request from "@/shared/utils/axios";
import { ISignInResponse } from "../types";

export async function signUp(data: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}): Promise<ISignInResponse> {
  return await request({
    url: "/user-service/auth/register",
    method: "post",
    data,
  });
}

export async function signIn(data: {
  email: string;
  password: string;
}): Promise<ISignInResponse> {
  return await request({
    url: "/user-service/auth/login",
    method: "post",
    data,
  });
}

export async function withGoogle(data: {
  accessToken: string;
}): Promise<ISignInResponse> {
  return await request({
    url: "/user-service/auth/google-auth",
    method: "post",
    data,
  });
}
