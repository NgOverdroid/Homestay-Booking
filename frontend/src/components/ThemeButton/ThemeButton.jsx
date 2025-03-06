import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
const moon_symbol = <FontAwesomeIcon icon={faMoon} />;
const sun_symbol = <FontAwesomeIcon icon={faSun} />;

export default function ThemeButton({theme, setTheme}) {
    return (
        <>
        { theme ?
            <div className="h-16 flex items-center justify-center">
                <button type="button" className="m-px size-10 text-sky-200 flex justify-center items-center border border-transparent text-3xl" onClick={() => setTheme("dark")}>
                    {moon_symbol}
            </button>
            </div>
            :
            <div className="h-16 flex items-center justify-center">
                <button type="button" className="m-px size-10 flex text-amber-300 justify-center items-center border border-transparent text-3xl" onClick={() => setTheme("light")}>
                    {sun_symbol}
                </button>
            </div>
        }
        </>
    );
}