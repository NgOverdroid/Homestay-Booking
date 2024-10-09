import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";

const user_icon = <FontAwesomeIcon icon={faUser} className="text-xl"/>;
const bars_icon = <FontAwesomeIcon icon={faBars}/>;

export default function ProfileChip() {
    return(
        <>
            <div title="Hover chip" className="h-16 px-3 w-28 pr-0 pl-0 flex gap-2 items-center justify-center text-gray-700 focus:bg-gray-300 focus:text-blue-900 active:text-yellow-500 active:bg-yellow-50 active:border-yellow-100 disabled:bg-gray-100 disabled:text-gray-400 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:active:text-yellow-400">
                <button className="flex gap-2">
                {user_icon}
                <p>Sign in</p>
                </button>
            </div>
        </>
    );
}