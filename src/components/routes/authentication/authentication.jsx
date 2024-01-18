import SignInForm from "../sign-in/Sign-in";
import SignUpForm from "../sign-up/SignUp";

const Authentication = () => {
    return (
        <main className="Authentication-box">
            <SignInForm />
            <SignUpForm/>
        </main>
    );
};

export default Authentication;
