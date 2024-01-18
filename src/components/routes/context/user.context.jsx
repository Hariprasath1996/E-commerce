import { createContext,useContext,useState } from "react";

const UserContext = createContext()


const UserProvider = ({children})=>{
    const [currentUser,setCurrentUser]=useState(null);
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