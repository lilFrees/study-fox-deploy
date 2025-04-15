import { auth } from "@/config/firebase";
import { useAuthStore } from "@/shared/store/auth-store";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, provider);
    const user = res.user;
    useAuthStore.setState({ user });
  } catch (error) {
    console.error("Error signing in with Google: ", error);
  }
};
