import "../assets/icons/index";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import AccountPageInput from "../components/AccountPageInput";
import MainPageLogo from "../assets/Logo.svg";
import { GoogleLogo } from "../assets/icons/index";
import { login, googleLogin } from "../services/authService";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate("/homepage");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="grid-container">
            <div className="left-grid">
                <Link to="/" className="login-logo">
                    <img src={MainPageLogo} alt="logo-page" />
                </Link>

                <div className="login-container">

                    <div className="login-signup-container">
                        <Link to="" className="login-login-button">Sign in</Link>
                        <Link to="/signup" className="login-signup-button">Sign up</Link>
                    </div>

                    <button type="button" className="login-google" onClick={googleLogin}>
                        <img src={GoogleLogo} alt="google-logo" />
                        Sign in with Google account
                    </button>


                    <form className="login-form" onSubmit={handleSubmit}>
                        <AccountPageInput
                            label="Email:" name="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} required
                        />

                        <AccountPageInput
                            label="Password:" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required
                        />

                        <div className="login-forgot-password">
                            <Link to="">Forgot password?</Link>
                        </div>

                        <AccountPageInput type="submit" value="Sign in" />

                    </form>


                    {/* Back button  */}
                    <div className="login-back-button-container">
                        <Link to="/" className="login-back-button">Back</Link>
                    </div>
                </div>
            </div>

            <div className="right-grid">

            </div>
        </div>
    );
}
