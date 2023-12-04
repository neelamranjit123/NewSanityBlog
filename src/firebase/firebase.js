// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBu3f2J05PgeFnMSkS62xGZyA4woYJrKVA",
  authDomain: "newsanityblog.firebaseapp.com",
  projectId: "newsanityblog",
  storageBucket: "newsanityblog.appspot.com",
  messagingSenderId: "876307391526",
  appId: "1:876307391526:web:d1869d93584ab44ca072e7"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };