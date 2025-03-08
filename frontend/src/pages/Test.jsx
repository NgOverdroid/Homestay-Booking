import React, { useEffect } from "react";
import { useSelector} from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
export default function Test() {
    const { access_token, is_loading } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    // Debugging logs
    console.log("Rendering Test Component...");
    console.log("is_loading:", is_loading);
    console.log("access_token:", access_token);

    return (
        <>
            <h1>{is_loading ? "Loading...." : "Is not Loading"}</h1>
            <h1>Access Token: {access_token}</h1>
            <div>
                <button onClick={() => navigate('/signin')}>Click Me to get to SignIn</button>
                <button onClick={async () => {
                    fetch("http://127.0.0.1:3000/auth_checkpoint", {
                        method: 'GET',
                        credentials: 'include'
                    });
                }}>Click Me to get to backend auth_checkpoint</button>
            </div>
        </>
    );
}
