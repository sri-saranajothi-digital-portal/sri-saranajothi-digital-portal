// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCbe7swvKlqFopMDxfwweVaPdmDJLkO08k",
  authDomain: "sasuna-digital-platform.firebaseapp.com",
  projectId: "sasuna-digital-platform",
  storageBucket: "sasuna-digital-platform.firebasestorage.app",
  messagingSenderId: "690227005242",
  appId: "1:690227005242:web:7344ae12e1ec637e4db203",
  measurementId: "G-KJFGBP7YK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
