// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbKOgAVY99QDngQDvkQ1JoJV_In70kKlk",
  authDomain: "crossaskout.firebaseapp.com",
  projectId: "crossaskout",
  storageBucket: "crossaskout.firebasestorage.app",
  messagingSenderId: "274158939029",
  appId: "1:274158939029:web:069b74be2967cf324fe49c",
  measurementId: "G-0MK17TC222"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth and Database instances
export const auth = getAuth(app);
export const database = getDatabase(app);

export default app;