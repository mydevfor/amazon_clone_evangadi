// we're importing the core Firebase library, as well as the
// functions for authentication and the Firestore database
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration for the Firebase project you created in the Firebase console
const firebaseConfig = {
  apiKey: "AIzaSyCapLF9KrvchFwQ7gNGJasIEhNFEcCLsBs",
  authDomain: "fir-e7fba.firebaseapp.com",
  projectId: "fir-e7fba",
  storageBucket: "fir-e7fba.appspot.com",
  messagingSenderId: "936778720115",
  appId: "1:936778720115:web:8110cfdcb4a6c730235b06"
};

// Initialize the Firebase app. This creates a new instance of the Firebase app, which is the entry point for all  Firebase functionality
const app = firebase.initializeApp(firebaseConfig);

// Get the authentication service for signing in and out of your app
export const auth = getAuth(app);

// Get the Firestore database for storing and retrieving data
export const db = app.firestore();

