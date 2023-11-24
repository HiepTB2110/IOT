import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSJdqSgZQgRAPLstLqO-VBcxv1C7i5ZzE",
  authDomain: "face-recogniton-iot-ptit.firebaseapp.com",
  projectId: "face-recogniton-iot-ptit",
  storageBucket: "face-recogniton-iot-ptit.appspot.com",
  messagingSenderId: "234447061798",
  appId: "1:234447061798:web:cc47bfbe33e4107cb637e7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getDatabase(app);
export const auth = getAuth(app);
