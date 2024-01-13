// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup}  from "firebase/auth"
import { getFirestore,doc,getDoc,setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK9IGMr3mLcT1W8KGjXwXM0_Swiuuowms",
  authDomain: "e-commerce-3b462.firebaseapp.com",
  projectId: "e-commerce-3b462",
  storageBucket: "e-commerce-3b462.appspot.com",
  messagingSenderId: "784386307089",
  appId: "1:784386307089:web:288ef9e45842186986edb0"
};

// Initialize Firebase
const ecommerceApp = initializeApp(firebaseConfig);

// Authentication
const eCommerceAuth = getAuth(ecommerceApp);
// sign in with google
const googleProvider= new GoogleAuthProvider ();

// helper function

const signInWithGooglePopup=()=>{
  signInWithPopup(eCommerceAuth,googleProvider)
}



export {signInWithGooglePopup}

// firebase data base added