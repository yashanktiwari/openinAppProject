// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxKy4FeFeSWqar9gjyNiN3MaX5zWsvmAs",
  authDomain: "openinapp-c6546.firebaseapp.com",
  projectId: "openinapp-c6546",
  storageBucket: "openinapp-c6546.appspot.com",
  messagingSenderId: "369399655993",
  appId: "1:369399655993:web:41f9d09fba32fb82c727e8",
  measurementId: "G-D2BV1CWBQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const provider = new GoogleAuthProvider();
export const auth = getAuth();