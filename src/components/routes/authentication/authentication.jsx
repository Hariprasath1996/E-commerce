import SignInForm from "../sign-in/Sign-in";
import SignUpForm from "../sign-up/SignUp";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

const Authentication = () => {
    return (
        <>
        <Navbar/>
        <main className="Authentication-box  ">
            <div className="form-container w-screen h-auto   flex flex-row justify-around items-center pt-[3rem] gap-20 ">
            <SignInForm className="" />
            <SignUpForm className="" />
            </div>
        
        </main>
        <Footer/>
        </>
    
    );
};

export default Authentication;
