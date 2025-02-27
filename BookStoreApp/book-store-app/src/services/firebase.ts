// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_DVEiTJ3aRYY-QJqovHG_y_MSqB5aBY8",
  authDomain: "fir-auth-34e9d.firebaseapp.com",
  projectId: "fir-auth-34e9d",
  storageBucket: "fir-auth-34e9d.appspot.com",
  messagingSenderId: "225827905044",
  appId: "1:225827905044:web:8104a4b5a0a8bfa3c85101",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
