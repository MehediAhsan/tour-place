// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASZITkSqs6xBatBhD9hvYqdy1NLUxTP4E",
  authDomain: "tour-place-cf5e6.firebaseapp.com",
  projectId: "tour-place-cf5e6",
  storageBucket: "tour-place-cf5e6.appspot.com",
  messagingSenderId: "889393825539",
  appId: "1:889393825539:web:56b6b5f0d4748b729f4b36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;