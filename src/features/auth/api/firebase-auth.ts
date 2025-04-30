"use client";

import { auth } from "@/config/firebase";
import { useAuthStore } from "@/shared/store/auth-store";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { withGoogle } from ".";

const provider = new GoogleAuthProvider();
 
export const signInWithGoogle = async () => {
  try {
    const response = await signInWithPopup(auth, provider);
    const user = response.user;

    if (!user.displayName || !user.email || !user.uid) {
      throw new Error("User data is incomplete");
    }

    const result = await withGoogle({
      email: user?.email,
      displayName: user?.displayName,
      photoUrl: user?.photoURL || "",
      providerName: "google",
      userID: user?.uid,
    });

    console.log(result);

    useAuthStore.setState({ user });
  } catch (error) {
    console.error("Error signing in with Google: ", error);
  }
};
