// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7dQboqfdea4uadYjap5kkJ0EoSuS-zws",
  authDomain: "mshackathon13-b26e5.firebaseapp.com",
  projectId: "mshackathon13-b26e5",
  storageBucket: "mshackathon13-b26e5.appspot.com",
  messagingSenderId: "482863969044",
  appId: "1:482863969044:web:093e20f58d673905a68801",
  measurementId: "G-EEJ50VQZN5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

export { app, analytics, auth, db }; // Export the db object