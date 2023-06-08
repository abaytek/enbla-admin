import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpL01vZEPgQGLelI6aLY_yUhQH9L8hALo",
  authDomain: "food-delivery-66360.firebaseapp.com",
  projectId: "food-delivery-66360",
  storageBucket: "food-delivery-66360.appspot.com",
  messagingSenderId: "952123640627",
  appId: "1:952123640627:web:a1c50874b8d2289fca0c46",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
