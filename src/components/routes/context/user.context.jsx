import { createContext } from "react";
const UserContext = createContext()

const UserProvider = ({children})=>{
    return <UserContextProvider>
        {children}
    </UserContextProvider>
}

export {UserProvider}