// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOyDKDh0BhdMWj2onrdd6kwXoLdKNtCzI",
  authDomain: "ups-clone-566d6.firebaseapp.com",
  databaseURL: "https://ups-clone-566d6-default-rtdb.firebaseio.com",
  projectId: "ups-clone-566d6",
  storageBucket: "ups-clone-566d6.appspot.com",
  messagingSenderId: "891265809237",
  appId: "1:891265809237:web:724b83827dab1bbd5a4ddc",
  measurementId: "G-NGZX5MNNS8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, firestore, storage, auth };
