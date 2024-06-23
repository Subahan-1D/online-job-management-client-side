// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz_xsyyt2sHVyDjtXfyAVVamGWJNXL4ks",
  authDomain: "solospher-client.firebaseapp.com",
  projectId: "solospher-client",
  storageBucket: "solospher-client.appspot.com",
  messagingSenderId: "553415478489",
  appId: "1:553415478489:web:a80cf089e137b9d89842c8",
  measurementId: "G-J1ZDZ3Y43S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);