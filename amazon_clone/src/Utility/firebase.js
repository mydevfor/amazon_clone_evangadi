// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
//imported for authentication
import { getAuth } from "firebase/auth";
//below two imports are for firebased db   firestore
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAplIgXip70vuP3xBtCrIIKqvGkJen2QI0",
  authDomain: "finto-56024.firebaseapp.com",
  projectId: "finto-56024",
  storageBucket: "finto-56024.appspot.com",
  messagingSenderId: "499668546704",
  appId: "1:499668546704:web:81d74e0a37e478fcb71415",
  measurementId: "G-1KYH6XJ6TP",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = app.firestore();
