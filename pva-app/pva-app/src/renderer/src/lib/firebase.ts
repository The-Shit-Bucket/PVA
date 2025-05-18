// src/renderer/src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Replace with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS-3b2CHe5eqaZR_7j2kUFBLfH08Rr6vk",
  authDomain: "pva-desktop-app.firebaseapp.com",
  projectId: "pva-desktop-app",
  storageBucket: "pva-desktop-app.firebasestorage.app",
  messagingSenderId: "477726354605",
  appId: "1:477726354605:web:f4e7a299581c820d1d6a24",
  measurementId: "G-X191BRQSL2" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); // For Firebase Storage (e.g., visitor photos)

export { app, auth, db, storage };