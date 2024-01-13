
// functions
import FormInput from "../authentication/FormInput";
import Button from "../authentication/button";
import { signInWithGooglePopup,createUserDocumentFromAuth } from "../../../constants/Fire-base/firebase";
import { useState } from "react";


const defaultFormFields={
    email:"",
    password:"",
}

const SignInForm =()=>{
    const [formFields,SetFormFields]=useState(defaultFormFields)
    const {email,password}=formFields;

    const signInWithGoogle=async()=>{
        const {user} = await signInWithGooglePopup()
      const userDocRef =  await createUserDocumentFromAuth(user)
    };


    const submitHandler=async(e)=>{
        e.preventDefault();
    }

    const  changeHandler =(e)=>{
    const {name,value}=e.target
    SetFormFields({...formFields,[name]:value});
    }

    return(
        <main>
            <h2>Don't Have An Account ?</h2>
            <span>SignUp With Your Email and Password</span>
            <form onSubmit={submitHandler}>
                <FormInput 
                    label ='Email'   
                    inputOptions ={
                        {
                            type : 'email',
                            required:true ,
                            id:'email',
                            name:'email',
                            value: email
                        }
                    }
                    onchange={changeHandler}
                        />
                        <FormInput 
                    label ='password'   
                    inputOptions ={
                        {
                            type : 'password',
                            required:true ,
                            id:'password',
                            name:'password',
                            value: password
                        }
                    }
                    onchange={changeHandler}
                        />
                        <div className="btn-box">
                            <Button type='submit'>
                                Sign in
                            </Button>


                            <Button buttonType='google' type='button' onClick={signInWithGoogle} className="google-sign-box">
                                Google Sign In
                            </Button>
                        </div>
            </form>
        </main>
    )
}

export default SignInForm ;
