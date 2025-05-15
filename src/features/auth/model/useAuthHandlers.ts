import { useMutation } from "@tanstack/react-query";
import { App } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import {
  registerWithPassword,
  signInWithGoogle,
  signInWithPassword,
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
        push("/profile");
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
        push("/profile");
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
        push("/profile");
      }
    },
  });

  return { googleSignInMutation, loginMutate, registerMutation };
}

export default useAuthHandlers;
