import React, {useState, useEffect} from 'react';
import PasswordAlert from './PasswordAlert/PasswordAlert';

export default function SignupForm(){
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validation, setValidation] = useState({
        length: false,
        uppercase_number: false,
        special_character: false,
    });

    useEffect(() => {
        const checkPassword = window.setTimeout(() => {
            validatePassword();
        },400);

        function validatePassword(){
            const regexNum = /[0-9]/;
            const regexUpperCase = /[A-Z]/;
            const regexSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
            let length = false;
            let uppercase_number = false;
            let special_character = false;
            if(password != ''){
                if (password.length >= 8 && password.length <= 20)
                    length = true;
                if (regexNum.test(password) && regexUpperCase.test(password))
                    uppercase_number = true;
                if (regexSpecialChar.test(password))
                    special_character = true;
                setValidation({
                    ...validation, 
                    "length": length, 
                    "uppercase_number": uppercase_number,
                    "special_character": special_character,
                });
            } else 
                setValidation({
                    ...validation, 
                    "length": false,
                    "uppercase_number": false,
                    "special_character": false,
                })
        }
        
        return(() => {
            window.clearTimeout(checkPassword);
        })
    }, [password]);

    return(
        <div className="bg-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
            <h1 className="text-3xl font-bold mb-8 text-center">Sign Up</h1>
            <form action=''>
                <div className="mb-4">
                    <label className="block font-semibold text-gray-700 mb-2" htmlFor="first_name">
                        First Name
                    </label>
                    <input
                        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="first_name" type="text" placeholder="First Name"
                        value={first_name} 
                        required
                        name='first_name'
                        onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label className="block font-semibold text-gray-700 mb-2" htmlFor="last_name">
                        Last Name
                    </label>
                    <input
                        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="last_name" type="text" placeholder="Last Name"
                        value={last_name} 
                        required
                        name='last_name'
                        onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label className="block font-semibold text-gray-700 mb-2" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email" type="email" placeholder="Enter your email address"
                        value={email} 
                        required
                        name="email"
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
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}/>
                    <PasswordAlert validation={validation}/>
                </div>
                <div className="mb-6">
                    <button
                        disabled={ (validation.length && validation.uppercase_number && validation.special_character) ? false : true}
                        className={ (validation.length && validation.uppercase_number && validation.special_character) ? "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" : "bg-blue-300 text-white font-bold py-2 px-4 rounded"}
                        type="submit">
                        Create an account
                    </button>
                </div>
            </form>
        </div>
    );
}

    