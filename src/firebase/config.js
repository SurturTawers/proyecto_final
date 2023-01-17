import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyB9eesBCj2BrGks2fZZfBy2ZZ9Mu-xXCrw",
  authDomain: "proyecto-final-react-d1688.firebaseapp.com",
  projectId: "proyecto-final-react-d1688",
  storageBucket: "proyecto-final-react-d1688.appspot.com",
  messagingSenderId: "998238460118",
  appId: "1:998238460118:web:e2fa104c4e0e14e3c39177"
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);

const db = getFirestore(fb);
export {db};