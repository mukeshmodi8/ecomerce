import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWSu4LK3ajg68izirjffQpJB9BPmoqIRA",
  authDomain: "fir-first-project-f1859.firebaseapp.com",
  projectId: "fir-first-project-f1859",
  storageBucket: "fir-first-project-f1859.appspot.com",
  messagingSenderId: "754966972664",
  appId: "1:754966972664:web:b214eaf98327437be5530d",
  measurementId: "G-175CBRQ15S"
};


const app = initializeApp(firebaseConfig);

// Auth & Database
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getDatabase(app);

// Export all
export { auth, googleProvider, db }; 
