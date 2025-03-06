import React from 'react';

export default function PasswordAlert({validation}){
    return(
        <ul className="space-y-3 p-1.5 font-medium">
                <li>Password must have: </li>
                <li className="flex items-start lg:col-span-1">
                    <div className="flex-shrink-0">
                        <svg className={ validation.length ? "w-5 h-5 text-green-400" : "w-5 h-5 text-gray-600"} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"></path>
                        </svg>
                    </div>
                    <p className={validation.length ? "ml-3 leading-5 text-gray-600 line-through" : "ml-3 leading-5 text-gray-600"}>
                        From 8 characters to 20 characters
                    </p>
                </li>
                <li className="flex items-start lg:col-span-1">
                    <div className="flex-shrink-0">
                        <svg className={ validation.uppercase_number ? "w-5 h-5 text-green-400" : "w-5 h-5 text-gray-600"} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"></path>
                        </svg>
                    </div>
                    <p className={validation.uppercase_number ? "ml-3 leading-5 text-gray-600 line-through" :"ml-3 leading-5 text-gray-600"}>
                        At least one Uppercase charcter and a number
                    </p>
                </li>
                <li className="flex items-start lg:col-span-1">
                    <div className="flex-shrink-0">
                        <svg className={ validation.special_character ? "w-5 h-5 text-green-400" : "w-5 h-5 text-gray-600"} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"></path>
                        </svg>
                    </div>
                    <p className={validation.special_character ? "ml-3 leading-5 text-gray-600 line-through" :"ml-3 leading-5 text-gray-600"}>
                        At least one special character, example: ?!@#$/+
                    </p>
                </li>
        </ul>
    );
}