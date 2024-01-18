
// functions
import FormInput from "../authentication/FormInput";
import Button from "../authentication/button";
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../../constants/Fire-base/firebase";
import { useState } from "react";

const defaultFormFields={
    displayname : "",
    email:"",
    password:"",
    confirmPassword : ""
}

const SignUpForm =()=>{
    const [formFields,SetFormFields]=useState(defaultFormFields)
    const {displayname,email,password,confirmPassword}=formFields; 


    const submitHandler=async(e)=>{
        e.preventDefault();
        if (! email || ! password){
            alert('password do not match')
            return;
        }
        try {
            const {user} = createAuthUserWithEmailAndPassword (email,password)
            console.log(user);
            const userDocRef = await createUserDocumentFromAuth (user,{
                displayname,
            });
            SetFormFields (defaultFormFields);
        } catch (error) {
            console.log('error occurred during ate user ' , error . message );
            if
                (error.code === 'auth/email-already-in-use'){
                    alert ('email already in use')
                }
            
            console.log(error.code);
        }
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
                        <FormInput 
                    label ='confirm-password'   
                    inputOptions ={
                        {
                            type : 'password',
                            required:true ,
                            id:'confirm-password',
                            name:'confirm-password',
                            value: confirmPassword
                        }
                    }
                    onchange={changeHandler}
                        />
                        <div className="btn-box">
                            <Button type='submit'>
                                Sign Up
                            </Button>
                        </div>
            </form>
        </main>
    )
}

export default SignUpForm ;
