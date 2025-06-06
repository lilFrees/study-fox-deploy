"use client";

import { auth } from "@/config/firebase";
import { useAuthStore } from "@/entities/user/model/useAuthStore";
import { IUser } from "@/entities/user/types";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { signIn, signUp, withGoogle } from ".";
import { message } from "antd";
import { useQuizStore } from "@/entities/quiz/model/useQuizStore";
import { useUploadedFileStore } from "@/shared/store/uploaded-file-store";

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const response = await signInWithPopup(auth, provider);
    const authUser = response.user;

    const token = (response.user as any).stsTokenManager.accessToken;

    if (!authUser.displayName || !authUser.email || !authUser.uid) {
      throw new Error("User data is incomplete");
    }

    const result = await withGoogle({
      accessToken: token,
    });

    if (!result) {
      throw new Error("Failed to sign in with Google");
    }

    const user: IUser = {
      username: result.username,
      displayName: authUser.displayName,
      email: authUser.email,
      photoUrl: authUser.photoURL || "",
    };

    localStorage.setItem("access_token", result.jwtToken);
    useAuthStore.setState({
      user,
    });

    await fetch("/api/set-token", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ token: result.jwtToken, user }),
    });

    await message.success("You have successfully logged in with Google");
  } catch (error) {
    console.error("Error signing in with Google: ", error);
  }
};

export async function signInWithPassword(data: {
  email: string;
  password: string;
}) {
  const { jwtToken, username } = await signIn(data);
  const user: IUser = {
    displayName: "",
    email: data.email,
    photoUrl: "",
    username: username,
  };

  localStorage.setItem("access_token", jwtToken);
  useAuthStore.setState({ user });

  await fetch("/api/set-token", {
    method: "POST",
    body: JSON.stringify({ token: jwtToken, user }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function registerWithPassword(data: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) {
  const { jwtToken, username } = await signUp(data);

  const user: IUser = {
    displayName: data?.firstName,
    email: data?.email,
    photoUrl: "",
    username: username,
  };

  localStorage.setItem("access_token", jwtToken);
  useAuthStore.setState({ user });

  await fetch("/api/set-token", {
    method: "POST",
    body: JSON.stringify({ token: jwtToken, user }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function signOut() {
  localStorage.removeItem("access_token");
  useAuthStore.setState({ user: null });
  useQuizStore.setState({ quiz: null, status: "stale", mode: null });
  useUploadedFileStore.setState({ file: null, textContent: null });

  await fetch("/api/sign-out", {
    method: "POST",
  });
}
