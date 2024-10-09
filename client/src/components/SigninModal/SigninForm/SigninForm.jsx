import React, {useState} from 'react';

export default function SigninForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return(
        <div className="bg-white dark:bg-slate-700 mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
            <h1 className="text-3xl font-bold mb-8 text-center">Sign Up</h1>
            <form>
                <div className="mb-4">
                    <label className="block font-semibold text-gray-700 mb-2" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email" type="email" placeholder="Enter your email address"
                        value={email} 
                        required
                        onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label className="block font-semibold text-gray-700 mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="password" placeholder="Enter your password" 
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}/>
                    <a className="text-gray-600 hover:text-red-600" href="#">Forgot your password?</a>
                </div>
                <div className="mb-6">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button">
                        Login
                    </button>
                    <a className='text-green-500 hover:text-red-300 block mt-3' href="#">Don't have an account?</a>
                </div>
            </form>
        </div>
    );
}

    