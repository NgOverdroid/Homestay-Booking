import { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useSelector, useDispatch} from 'react-redux';
import { logIn } from "../features/authSlice";

export default function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [error_message, setErrorMessage] = useState("");
    const {access_token} = useSelector((state) => state.auth);
    const [validation, setValidation] = useState({
        "length": false,
        "uppercase": false,
        "special_character": false,
        "number": false
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const mutation = useMutation({
        mutationFn: createAccount,
        onSuccess: (data) => {
            dispatch(logIn(data.access_token));
            navigate('/test');
        },
        onError: (error) => setErrorMessage(error.message)
    });

    async function createAccount({name, email, password, phone}){
        const response = await fetch("http://127.0.0.1:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": name,
                "email": email,
                "password": password,
                "phone": phone
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        return data;
    }

    function handleCreateAccount(e){
        e.preventDefault();
        mutation.mutate({name, email, password, phone});
    }

    useEffect(() => {
        function validatePassword(){
            const regexNum = /[0-9]/;
            const regexUpperCase = /[A-Z]/;
            const regexSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

            if(password != ''){
                if (password.length >= 8 && password.length <= 20)
                    setValidation({
                        ...validation, 
                        "length": true, 
                        "uppercase": regexUpperCase.test(password),
                        "special_character": regexSpecialChar.test(password),
                        "number": regexNum.test(password)
                    });
                else
                    setValidation({
                        ...validation, 
                        "length": false, 
                        "uppercase": regexUpperCase.test(password),
                        "special_character": regexSpecialChar.test(password),
                        "number": regexNum.test(password)
                    });
            } 
            
            else 
                setValidation({
                    ...validation, 
                    "length": false,
                    "uppercase": false,
                    "special_character": false,
                    "number": false
                });
        }

        const checkPassword = window.setTimeout(() => {
            validatePassword();
        }, 300);

        return(() => {
            window.clearTimeout(checkPassword);
        })
    }, [password]);

    if (access_token)
        return(
            <Navigate replace={true} to="/test"></Navigate>
        );

    return(
        <>
        <div className="min-h-screen bg-gray-100">
        {/* <!-- Auth Pages --> */}
            <div className="min-h-screen flex">
            {/* <!-- Left Side - Auth Forms --> */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                    <div className="w-full max-w-md">
                        {/* <!-- Form Container --> */}
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                        {/* <!-- Logo --> */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                            <i className="fas fa-sign-in-alt text-red-600 fa-lg"></i>
                            <i className="fas fa-user-plus text-red-600 fa-lg"></i>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">
                            <span>Sign Up</span>
                            </h2>
                            <p className="text-gray-600 mt-2">
                            <span>Get Started with your account</span>
                            </p>
                        </div>

                        {/* <!-- Form --> */}
                        <form>
                            {/* <!-- Name Field (Register only) --> */}
                            <div className="mb-6 transition-all duration-300 ease-out">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                            <div className="relative">
                                <input
                                type="text"
                                name="name"
                                required
                                className="w-full px-4 py-3 rounded-lg border text-black border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
                                placeholder="John Doe"
                                onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            </div>

                            {/* <!-- Email Field --> */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <div className="relative">
                                    <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors text-black"
                                    placeholder="you@example.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <i className="fas fa-envelope absolute right-2 top-4 w-6 h-6 text-gray-400"></i>
                                </div>
                            {
                                (email.length > 0 && /@/.test(email) != true) 
                                &&
                                <p className="mt-2 text-sm text-red-600">Please enter a valid email address</p>
                            }
                            {
                                (error_message == "Email already in use")
                                &&
                                <p className="mt-2 text-sm text-red-600">{error_message}</p>
                            }
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                <div className="relative">
                                    <input
                                    type="text"
                                    name="phone"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border text-black border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
                                    onChange={(e) => setPhone(e.target.value)}
                                    />
                                    <i className="fas fa-envelope absolute right-2 top-4 w-6 h-6 text-gray-400"></i>
                                </div>
                            </div>

                            {/* <!-- Password Field --> */}
                            <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                            <div className="relative">
                                <input
                                name="password"
                                type="password"
                                required
                                className="w-full px-4 py-3 rounded-lg border text-black border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
                                placeholder="••••••••"
                                onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                type="button"
                                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                                >
                                <i className="w-6 h-6"></i>
                                </button>
                            </div>
                            {
                                password.length > 0
                                &&
                                <div>
                                    <p className={`mt-2 text-sm ${validation.length ? "text-green-600" : "text-red-600"}`}>Password must be at least 8 characters</p>
                                    <p className={`mt-2 text-sm ${validation.uppercase ? "text-green-600" : "text-red-600"}`}>Password must have an uppercase letter </p>
                                    <p className={`mt-2 text-sm ${validation.number ? "text-green-600" : "text-red-600"}`}>Password must have a number </p>
                                    <p className={`mt-2 text-sm ${validation.special_character ? "text-green-600" : "text-red-600"}`}>Password must have a special character </p>
                                </div>
                            }
                            </div>

                            {/* <!-- Submit Button --> */}
                            <button
                            type="button"
                            className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 focus:ring-4 focus:ring-red-600 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled = { mutation.isPending ? true : false}
                            onClick={(e) => handleCreateAccount(e)}
                            >
                            { 
                                mutation.isPending
                                ?
                                <span className="inline-flex items-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Creating An Account
                                </span>
                                :
                                <span className="inline-flex items-center">
                                    Create Account
                                </span>

                            }
                            </button>

                            {/* <!-- Form Switch --> */}
                            <p className="mt-6 text-center text-gray-600">
                            <span>Already have an account?</span>
                            <button
                                type="button"
                                className="ml-1 text-red-600 hover:text-red-700 font-semibold focus:outline-none"
                                onClick={() => navigate('/signin')}
                            >
                                <span>Sign In</span>
                            </button>
                            </p>
                        </form>
                        </div>
                    </div>
                </div>

            {/* <!-- Right Side - Image --> */}
                <div
                className="hidden lg:block lg:w-1/2 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80')" }}
                >
                    <div className="h-full bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="text-center text-white px-12">
                        <h2 className="text-4xl font-bold mb-6">Your Title</h2>
                        <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, expedita.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}