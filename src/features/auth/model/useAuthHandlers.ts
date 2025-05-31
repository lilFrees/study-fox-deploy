import { useMutation } from "@tanstack/react-query";
import { App } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import {
  registerWithPassword,
  signInWithGoogle,
  signInWithPassword,
  signOut,
} from "../api/auth-handlers";

function useAuthHandlers() {
  const { message } = App.useApp();
  const searchParams = useSearchParams();
  const { push } = useRouter();

  const googleSignInMutation = useMutation({
    mutationKey: ["sign-in"],
    mutationFn: signInWithGoogle,
    onSuccess: async () => {
      message.success("You have successfully signed in");
      if (searchParams.get("source") === "upload") {
        push("/quiz-generation");
      } else {
        push("/account/home");
      }
    },
  });

  const loginMutate = useMutation({
    mutationKey: ["sign-in"],
    mutationFn: signInWithPassword,
    onSuccess: async () => {
      message.success("You have successfully signed in");
      if (searchParams.get("source") === "upload") {
        push("/quiz-generation");
      } else {
        push("/account/home");
      }
    },
  });

  const registerMutation = useMutation({
    mutationKey: ["sign-up"],
    mutationFn: registerWithPassword,
    onSuccess: async () => {
      message.success("You have successfully signed up");
      if (searchParams.get("source") === "upload") {
        push("/quiz-generation");
      } else {
        push("/account/home");
      }
    },
  });

  const logoutMutation = useMutation({
    mutationKey: ["logout"],
    mutationFn: signOut,
    onSuccess: () => {
      message.success("You have successfully logged out");
      push("auth/sign-in");
    },
  });

  return {
    googleSignInMutation,
    loginMutate,
    registerMutation,
    logoutMutation,
  };
}

export default useAuthHandlers;
