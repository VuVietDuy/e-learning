import exp from "constants";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAG6XxZewsbEAEyONQ5lppSPh8c0CF-Q4",
  authDomain: "e-learning-platform-b7fea.firebaseapp.com",
  databaseURL: "https://e-learning-platform-b7fea-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "e-learning-platform-b7fea",
  storageBucket: "e-learning-platform-b7fea.appspot.com",
  messagingSenderId: "1055713884131",
  appId: "1:1055713884131:web:7c6520450dfe5cf09a12d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const realtimeDb = getDatabase(app);
const firestore = getFirestore(app);

export {
  firestore,
}