import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validation, setValidation] = useState({
        "length": false,
        "uppercase_number": false,
        "special_character": false
    });
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const checkPassword = window.setTimeout(() => {
            validatePassword();
        },400);

        function validatePassword(){
            const regexNum = /[0-9]/;
            const regexUpperCase = /[A-Z]/;
            const regexSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

            let length = false;
            let has_uppercase = false;
            let has_special_character = false;

            if(password != ''){
                if (password.length >= 8 && password.length <= 20)
                    length = true;
                if (regexNum.test(password) && regexUpperCase.test(password))
                    has_uppercase = true;
                if (regexSpecialChar.test(password))
                    has_special_character = true;
                setValidation({
                    ...validation, 
                    "length": length, 
                    "uppercase_number": uppercase_number,
                    "special_character": has_special_character,
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
        <>
        <div x-data="authPage()" class="min-h-screen bg-gray-100">
        {/* <!-- Auth Pages --> */}
            <div class="min-h-screen flex">
            {/* <!-- Left Side - Auth Forms --> */}
                <div class="w-full lg:w-1/2 flex items-center justify-center p-8">
                    <div class="w-full max-w-md">
                        {/* <!-- Form Container --> */}
                        <div class="bg-white rounded-2xl shadow-xl p-8">
                        {/* <!-- Logo --> */}
                        <div class="text-center mb-8">
                            <div class="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                            <i x-show="isLogin" class="fas fa-sign-in-alt text-red-600 fa-lg"></i>
                            <i x-show="!isLogin" class="fas fa-user-plus text-red-600 fa-lg"></i>
                            </div>
                            <h2 class="text-2xl font-bold text-gray-800">
                            <span x-text="isLogin ? 'Welcome Back!' : 'Create Account'"></span>
                            </h2>
                            <p class="text-gray-600 mt-2">
                            <span x-text="isLogin ? 'Please sign in to continue' : 'Get started with your account'"></span>
                            </p>
                        </div>

                        {/* <!-- Form --> */}
                        <form>
                            {/* <!-- Name Field (Register only) --> */}
                            <div x-show="!isLogin" class="mb-6 transition-all duration-300 ease-out">
                            <label class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                            <div class="relative">
                                <input
                                type="text"
                                x-model="name"
                                required
                                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
                                placeholder="John Doe"
                                />
                            </div>
                            </div>

                            {/* <!-- Email Field --> */}
                            <div class="mb-6">
                            <label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <div class="relative">
                                <input
                                type="email"
                                x-model="email"
                                required
                                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
                                placeholder="you@example.com"
                                />
                                <i class="fas fa-envelope absolute right-2 top-4 w-6 h-6 text-gray-400"></i>
                            </div>
                            <p x-show="email && !validateEmail(email)" class="mt-2 text-sm text-red-600">Please enter a valid email address</p>
                            </div>

                            {/* <!-- Password Field --> */}
                            <div class="mb-6">
                            <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
                            <div class="relative">
                                <input
                                x-model="password"
                                required
                                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
                                placeholder="••••••••"
                                />
                                <button
                                type="button"
                                class="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                                >
                                <i class="w-6 h-6"></i>
                                </button>
                            </div>
                            <p x-show="password && !validatePassword(password)" class="mt-2 text-sm text-red-600">Password must be at least 8 characters</p>
                            </div>

                            {/* <!-- Confirm Password Field (Register only) --> */}
                            <div x-show="!isLogin" class="mb-6 transition-all duration-300 ease-out">
                            <label class="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                            <div class="relative">
                                <input
                                x-model="confirmPassword"
                                required
                                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
                                placeholder="••••••••"
                                />
                                <button
                                type="button"
                                class="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                                
                                >
                                <i class="w-6 h-6"></i>
                                </button>
                            </div>
                            <p x-show="confirmPassword && !validateConfirmPassword()" class="mt-2 text-sm text-red-600">Passwords do not match</p>
                            </div>

                            {/* <!-- Submit Button --> */}
                            <button
                            type="submit"
                            class="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 focus:ring-4 focus:ring-red-600 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                            <span x-show="loading" class="inline-flex items-center">
                                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                            </span>
                            <span x-show="!loading" x-text="isLogin ? 'Sign In' : 'Create Account'"></span>
                            </button>

                            {/* <!-- Form Switch --> */}
                            <p class="mt-6 text-center text-gray-600">
                            <span x-text="isLogin ? 'Don\'t have an account?' : 'Already have an account?'"></span>
                            <button
                                type="button"
                                class="ml-1 text-red-600 hover:text-red-700 font-semibold focus:outline-none"
                            >
                                <span x-text="isLogin ? 'Sign up' : 'Sign in'"></span>
                            </button>
                            </p>
                        </form>
                        </div>
                    </div>
                </div>

            {/* <!-- Right Side - Image --> */}
                <div
                class="hidden lg:block lg:w-1/2 bg-cover bg-center"
                style="background-image: url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80')"
                >
                    <div class="h-full bg-black bg-opacity-50 flex items-center justify-center">
                        <div class="text-center text-white px-12">
                        <h2 class="text-4xl font-bold mb-6">Your Title</h2>
                        <p class="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, expedita.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}