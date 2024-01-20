import { createContext,useContext,useEffect,useState } from "react";
import {onAuthStateChangedListener,createUserDocumentFromAuth,signOutUser} from '../../../constants/Fire-base/firebase'


signOutUser()

const UserContext = createContext()


const UserProvider = ({children})=>{
    const [currentUser,setCurrentUser]=useState(null);
useEffect(()=>{
    const unSubscribe = onAuthStateChangedListener((user)=>{
        console.log(user);
        setCurrentUser(user);
        if (user) {
            createUserDocumentFromAuth(user)
        }
    });
    return unSubscribe ;
},[])


    const Values = {currentUser,setCurrentUser}
    return <UserContext.Provider value={Values}>
        {children}
    </UserContext.Provider>
};

// custom hook
const useUserGlobalContext = ()=>{
    return useContext (UserContext);
};

export {UserProvider,useUserGlobalContext}