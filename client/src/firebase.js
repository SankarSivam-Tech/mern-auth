// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "mern-auth-c5132.firebaseapp.com",
  projectId: "mern-auth-c5132",
  storageBucket: "mern-auth-c5132.firebasestorage.app",
  messagingSenderId: "667798373881",
  appId: "1:667798373881:web:68398ecb03002fbae8e928"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);