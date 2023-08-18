// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhWHsAIAeqYRqUw_SA99kIelDI181nZn4",
  authDomain: "blog-app-20760.firebaseapp.com",
  projectId: "blog-app-20760",
  storageBucket: "blog-app-20760.appspot.com",
  messagingSenderId: "888063904065",
  appId: "1:888063904065:web:ed433e2773bc5f5d96f9c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();