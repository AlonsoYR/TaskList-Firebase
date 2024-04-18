// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwOyCruHiJ8bhVjbzBzi5ZoTiGpiEXNsA",
  authDomain: "tasklist-firebase-7bf5d.firebaseapp.com",
  projectId: "tasklist-firebase-7bf5d",
  storageBucket: "tasklist-firebase-7bf5d.appspot.com",
  messagingSenderId: "628382860241",
  appId: "1:628382860241:web:11b54d57c7aa4a35bd96f0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);