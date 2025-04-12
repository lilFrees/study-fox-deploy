// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM4xWoDZrb2B4l6_-mdw9Vo5ENgv_fCNY",
  authDomain: "study-fox-f9b27.firebaseapp.com",
  projectId: "study-fox-f9b27",
  storageBucket: "study-fox-f9b27.firebasestorage.app",
  messagingSenderId: "38242968511",
  appId: "1:38242968511:web:f31c5c94bce56401ba770a",
  measurementId: "G-WZLEPG0R6G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
