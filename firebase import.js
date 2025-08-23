// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbHl3s7JUT0ZEd-9bdd0t6L1LuZwBhSZg",
  authDomain: "ml-kit-ocr-1cb19.firebaseapp.com",
  projectId: "ml-kit-ocr-1cb19",
  storageBucket: "ml-kit-ocr-1cb19.firebasestorage.app",
  messagingSenderId: "1079498045018",
  appId: "1:1079498045018:web:f6568511e40b7fae520a63",
  measurementId: "G-TEVV28VBWE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
