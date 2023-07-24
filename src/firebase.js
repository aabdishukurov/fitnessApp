// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDokuGkYS1gBOVtvy9nu_OPpcyOGHUHXKo",
  authDomain: "fitapp-3e972.firebaseapp.com",
  projectId: "fitapp-3e972",
  storageBucket: "fitapp-3e972.appspot.com",
  messagingSenderId: "733242627015",
  appId: "1:733242627015:web:86a3f0f154cbb1eb0bbfe2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
