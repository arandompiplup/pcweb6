// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};
// const firebaseConfig = {
//   apiKey: "AIzaSyDcHSf9geycBnbi5hgymCyIdyTgV_HtaNs",
//   authDomain: "pcweb6-c38d4.firebaseapp.com",
//   projectId: "pcweb6-c38d4",
//   storageBucket: "pcweb6-c38d4.appspot.com",
//   messagingSenderId: "984164270982",
//   appId: "1:984164270982:web:d452f8a08a03c37e292207"
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


