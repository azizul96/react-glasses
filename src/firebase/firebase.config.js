// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeezBNJyfQXSTCn_tay5lwSoM9ggMHxVU",
  authDomain: "react-glusses.firebaseapp.com",
  projectId: "react-glusses",
  storageBucket: "react-glusses.appspot.com",
  messagingSenderId: "923731971557",
  appId: "1:923731971557:web:e7edeb5e3d10073494f30c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;