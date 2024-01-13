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





// firestore data base added
const ecommerceDb=getFirestore(ecommerceApp)


const addData=async(collection , id ,val)=>{
  const res = await setDoc(doc(ecommerceDb, collection,id),val);
    

  console.log(res);
}
addData('cities','LA',{name: "Los Angeles",
state: "CA",
country: "USA"});
const createUserDocumentFromAuth=async(userAuth)=>{
  if(! userAuth) return;

  const userDocRef = doc(ecommerceDb,'users',userAuth.uid);
  console.log(userDocRef);

  //use snapshot is check weather the user is already in the list or not
  const userSnapShot = await getDoc(userDocRef)
  console.log(userSnapShot);
  console.log(userSnapShot.exists());


  if ( ! userSnapShot.exists()) {
    const {displayName,email} = userAuth;
    const createdAt = new Date ();
    try {
      await setDoc (userDocRef,
        {
          displayName,
          email,
          createdAt,
        })
    } catch (err){
      console.log('error creating the user',err.message);
    }
    
  }
return userDocRef;
}

export {signInWithGooglePopup,createUserDocumentFromAuth}