import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Auth.css';
import SignInImg from "./SignInImg.jpeg"; 

function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = async () => {
        try {
            const response = await fetch("http://localhost:3500/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("token", data.token);
                navigate("/"); 
            } else {
                const data = await response.json();
                alert(data.error);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="auth-container">
            <div className="layout">
                <div className="sign-image">
                    <img src={SignInImg} alt="Sign In" />
                </div>
                <div className="sign-form">
                    <h2>Sign In</h2>
                    <form>
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type="button" className="btnn" onClick={handleSignIn}>Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
