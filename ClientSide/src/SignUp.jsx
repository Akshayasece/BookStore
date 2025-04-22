import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Auth.css';
import SignUpImg from "./SignUpImg.jpeg"; 

function SignUp() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async () => {
        if (!username || !email || !password) {
            alert("Please fill in all the fields.");
            return; 
        }
        try {
            const response = await fetch("http://localhost:3500/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password }),
            });
            if (response.ok) {
                navigate("/SignIn");
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
                    <img src={SignUpImg} alt="Sign Up" />
                </div>
                <div className="sign-form">
                    <h2>Sign Up</h2>
                    <form>
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type="button" className="btnn" onClick={handleSignUp}>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
