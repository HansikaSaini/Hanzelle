import {getAuth, GoogleAuthProvider} from "firebase/auth"

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "goggle-login-2f8c0.firebaseapp.com",
  projectId: "goggle-login-2f8c0",
  storageBucket: "goggle-login-2f8c0.firebasestorage.app",
  messagingSenderId: "859670315874",
  appId: "1:859670315874:web:0394665c9775358c58a23b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}

