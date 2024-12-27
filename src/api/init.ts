// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPhrk9mJVlz7-K65-oQNAmCvagWmUX6mU",
  authDomain: "campusconnect-9.firebaseapp.com",
  projectId: "campusconnect-9",
  storageBucket: "campusconnect-9.firebasestorage.app",
  messagingSenderId: "327875185369",
  appId: "1:327875185369:web:5fa6cd7e4bfce8fad0ccc8",
  measurementId: "G-8J65C773F6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const secondaryApp = initializeApp(firebaseConfig, "Secondary");
