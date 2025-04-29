// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: "ai-short-video-generator-a2d6e.firebaseapp.com",
  projectId: "ai-short-video-generator-a2d6e",
  storageBucket: "ai-short-video-generator-a2d6e.firebasestorage.app",
  messagingSenderId: "669625698867",
  appId: "1:669625698867:web:e2726efeb87cd1ef857146",
  measurementId: "G-D19JHCZ7HK"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);