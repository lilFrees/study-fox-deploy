// lib/firebase.js
import { initializeApp, getApp, getApps, FirebaseApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";

// Firebase configuration object using NEXT_PUBLIC_ variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "",
};

// Validate configuration (optional, for debugging)
if (!firebaseConfig.apiKey) {
  console.warn(
    "Firebase configuration is incomplete. Check environment variables.",
  );
}

// Initialize Firebase only in the browser
let app: FirebaseApp | null;
let auth: Auth | null;

if (typeof window !== "undefined") {
  app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  auth = getAuth(app);
} else {
  // Avoid errors during server-side rendering
  app = null;
  auth = null;
}

export { auth };
