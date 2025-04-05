import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA30ddAtctk_EwJQIj8oT5-JKko3vt28oc",
  authDomain: "salao-beatriz.firebaseapp.com",
  projectId: "salao-beatriz",
  storageBucket: "salao-beatriz.firebasestorage.app",
  messagingSenderId: "730186272521",
  appId: "1:730186272521:web:3e929751de6bf835c08dd8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); 

export { db, auth };
