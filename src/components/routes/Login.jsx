import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";

const LoginPage = () => {
    // State for form inputs
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Handle form submission
    const handleLogin = (e) => {
        e.preventDefault();
        setUsername('');
        setPassword('');
    };

    return (
        <>
            <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-cyan-400 to-blue-500 py-8">
                {/* Profile Heading */}
                <h2 className="text-white font-bold text-4xl mb-8 flex flex-row gap-2 items-center">
                    <CgProfile className="text-red-600 text-5xl" />
                    Profile Page
                </h2>

                {/* Login Form */}
                <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg" onSubmit={handleLogin}>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2 text-lg" htmlFor="username">
                            User-ID:
                        </label>
                        <input
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            type="email"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    
                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2 text-lg" htmlFor="password">
                            Password:
                        </label>
                        <input
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2 text-lg" htmlFor="confirm-password">
                            Confirm Password:
                        </label>
                        <input
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            type="password"
                            id="confirm-password"
                            placeholder="Re-enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1"
                    >
                        Login
                    </button>
                </form>
            </div>
        </>
    );
};

export { LoginPage };
