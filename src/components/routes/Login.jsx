import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";

const LoginPage = ()=>{

    // create two variables that takes string  and have a function in use state
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // here we create a function for form submission

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Username:', username);
    console.log('Password:', password);
    setUsername('');
    setPassword('');
    };


    return (
                
        <div className=' w-screen h-auto flex flex-col justify-center items-center bg-cyan-400 p-6 text-lg gap-8 '>
            <h2 className=' text-black font-bold text-2xl p-2  flex flex-row gap-4 justify-center items-center'>  <CgProfile className='text-red-600' />Profile-page</h2>
    <form className=' w-screen h-auto flex flex-col justify-center items-center p-4  ' onSubmit={handleLogin}>
        <label className=' h-auto flex flex-row justify-center items-center text-black font-bold text-xl gap-x-8 p-3 w-[45rem]   '>
        User-ID :  
        <input className=' text-black font-bold text-xl  p-2 rounded-md  '
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
        />
        </label >

        <br />
        <label className=' h-auto flex flex-row justify-center items-center text-black font-bold text-xl gap-x-8 p-3  w-[45rem] relative right-2 '>
        Password :
        <input className=' text-black font-bold text-xl p-2 rounded-md '
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
        </label>
        <br />
        <label className=' h-auto flex flex-row justify-center items-center text-black font-bold text-xl gap-x-8 p-3    w-[45rem] relative right-12  '>
        Confirm-Password :
        <input className=' text-black font-bold text-xl p-2 rounded-md '
            type="password"
            required
        />
        </label>
        <br/>
        <button className='w-auto h-auto  hover:cursor-pointer hover:translate-y-1 px-6 py-2  bg-white text-black rounded-md font-bold border-4 border-indigo-300/100 ...   flex flex-col justify-center items-center ' type="submit">Login</button>
    </form>
        </div>

        );

};

export  {LoginPage} ;

