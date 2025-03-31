import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWSu4LK3ajg68izirjffQpJB9BPmoqIRA",
  authDomain: "fir-first-project-f1859.firebaseapp.com",
  projectId: "fir-first-project-f1859",
  storageBucket: "fir-first-project-f1859.appspot.com", // ✅ सही किया गया
  messagingSenderId: "754966972664",
  appId: "1:754966972664:web:b214eaf98327437be5530d",
  measurementId: "G-175CBRQ15S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { db, auth }; 
