// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//inisialisasi firebase authentication
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "mood-meter-8d5a7.firebaseapp.com",
  projectId: "mood-meter-8d5a7",
  storageBucket: "mood-meter-8d5a7.appspot.com",
  messagingSenderId: "324058176372",
  appId: "1:324058176372:web:e5a061f8a0bb11160aaa21",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi Firebase Authentication
const auth = getAuth(app);

// Authentication Function

const userRegisterWithEmailPassword = async (email, password) => {
  try {
    const registerResponse = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(
      "User yang teregister dan berhasil login",
      registerResponse.user
    );
  } catch (error) {
    console.log("Error code :", error.code);
    console.log("Error message :", error.message);
  }
};

const userLogoutFunc = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};
const userForgotPass = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    return error;
  }
};

export { auth, userRegisterWithEmailPassword, userLogoutFunc, userForgotPass };
