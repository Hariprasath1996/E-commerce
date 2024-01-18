
// functions
import FormInput from "../authentication/FormInput";
import Button from "../authentication/button";
import { signInWithGooglePopup } from "../../../constants/Fire-base/firebase";
import { useState } from "react";

const defaultFormFields={
    email:"",
    password:"",
}

const SignUpForm =()=>{
    const [formFields,SetFormFields]=useState(defaultFormFields)
    const {email,password}=formFields;

    const signInWithGoogle=async()=>{
        const result =  signInWithGooglePopup()
        console.log(result);
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
                    label ='Display Name'   
                    inputOptions ={
                        {
                            type : 'text',
                            required:true ,
                            id:'display-name',
                            name:'display-name',
                            value: displayname
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
                        <FormInput 
                    label ='confirm-password'   
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


                            {/* <Button buttonType='google' type='button' onClick={signInWithGoogle} className="google-sign-box">
                                Google Sign In
                            </Button> */}
                        </div>
            </form>
        </main>
    )
}

export default SignUpForm ;
