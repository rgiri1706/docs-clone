// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYvCCuSL8KaKZyDf8PXlvbAqxCJJ09W74",
  authDomain: "docs-clone-d19e5.firebaseapp.com",
  projectId: "docs-clone-d19e5",
  storageBucket: "docs-clone-d19e5.appspot.com",
  messagingSenderId: "5211331494",
  appId: "1:5211331494:web:0a301b060a35f97a0f0d67",
  measurementId: "G-PYHVTPZ5V8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);