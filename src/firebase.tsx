// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDosXODLX0xQ16N769C-_-PY5eYcUSGntM",
  authDomain: "auth-a272b.firebaseapp.com",
  projectId: "auth-a272b",
  storageBucket: "auth-a272b.appspot.com",
  messagingSenderId: "376613180236",
  appId: "1:376613180236:web:da90c0c51892160332f5e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);