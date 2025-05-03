"use client";

import { auth } from "@/config/firebase";
import { useAuthStore } from "@/shared/store/auth-store";
import { IUser } from "@/shared/types";
import { message } from "antd";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { withGoogle } from ".";

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const response = await signInWithPopup(auth, provider);
    const authUser = response.user;

    if (!authUser.displayName || !authUser.email || !authUser.uid) {
      throw new Error("User data is incomplete");
    }

    const result = await withGoogle({
      email: authUser?.email,
      displayName: authUser?.displayName,
      photoUrl: authUser?.photoURL || "",
      providerName: "google",
      userID: authUser?.uid,
    });

    const user: IUser = {
      username: result.username,
      displayName: authUser.displayName,
      email: authUser.email,
      photoUrl: authUser.photoURL || "",
    };

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
