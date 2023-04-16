// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCIdUywIrHbSvkFkn2OCEzN3Y-iSFhbxVU",
  authDomain: "finalproject-1f390.firebaseapp.com",
  projectId: "finalproject-1f390",
  storageBucket: "finalproject-1f390.appspot.com",
  messagingSenderId: "63211001118",
  appId: "1:63211001118:web:7a20192a5da5640b83e50f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();