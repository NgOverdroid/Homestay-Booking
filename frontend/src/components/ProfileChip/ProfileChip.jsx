import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../features/authSlice";
import { NavLink, replace, useNavigate } from "react-router-dom";

export default function ProfileChip() {
    const {is_loading, access_token, name} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleLogout(){
        dispatch(logOut);
    }

    function handleLogIn(){
        navigate('/login', {replace: true});
    }

    if(is_loading)
        return(
            <>
            <div
            class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            </div>
            </>
        );
    
    else if (access_token)
        return(
            <>
            <div
            class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://tailwindcss.com/img/erin-lindford.jpg" alt=""/>
                <div class="text-center space-y-2 sm:text-left">
                    <div class="space-y-0.5">
                        <p class="text-lg text-black font-semibold">
                            {name}
                        </p>
                        <NavLink class="text-slate-500 font-medium" to="/account">
                            Go To Profile
                        </NavLink>
                    </div>
                    <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={handleLogout}>Log Out
                    </button>
                </div>
            </div>
            </>
        );

    else 
        return(
            <button className="btn btn-info" onClick={handleLogIn}>Log In</button>
        );

}