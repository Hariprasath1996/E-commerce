// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, signOut}  from "firebase/auth"
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
const createAuthUserWithEmailAndPassword =async(email,password)=>{
  if (! email || ! password) return;
return createUserWithEmailAndPassword(eCommerceAuth, email, password)
}
const SignInAuthUserWithEmailAndPassword =async(email,password)=>{
  if (! email || ! password) return;
return  signInWithEmailAndPassword(eCommerceAuth, email, password)
}
const signOutUser = ()=>signOut(eCommerceAuth);
export const onAuthStateChangedListener=(callback)=>
onAuthStateChanged(eCommerceAuth,callback)

const signInWithGooglePopup= async()=>{
await signInWithPopup(eCommerceAuth,googleProvider)
}





// fireStore data base added
const ecommerceDb=getFirestore(ecommerceApp)


const addData=async(collection , id ,val)=>{
  const res = await setDoc(doc(ecommerceDb, collection,id),val);
    

  console.log(res);
}
addData('cities','LA',{name: "Los Angeles",
state: "CA",
country: "USA"});
const createUserDocumentFromAuth=async(userAuth, 
  // how to pass additional information , use this methods its fully based on js
  additionalUserInfo={

}
)=>{

  if(! userAuth ) return;

  // here  userAuth.uid is checking weather the id is already there or not
  const userDocRef = doc(ecommerceDb,'users',userAuth.uid);
  //use snapshot is check weather the user is already in the list or not
  const userSnapShot = await getDoc(userDocRef)
  //  if the id is not came below code will run 
  if ( ! userSnapShot.exists()) {
    const {displayName,email} = userAuth;
    const createdAt = new Date ();
    try {
      await setDoc (userDocRef,
        {
          displayName,
          email,
          createdAt,
          ...additionalUserInfo,
        })
    } catch (err){
      console.log('error creating the user',err.message);
    }
    
  }
  //  if the id is already is there i simply return it 
return userDocRef;
}

export {signInWithGooglePopup,createUserDocumentFromAuth,createAuthUserWithEmailAndPassword,SignInAuthUserWithEmailAndPassword,onAuthStateChanged,signOutUser}