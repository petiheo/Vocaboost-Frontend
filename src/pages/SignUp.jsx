import "../assets/icons/index";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import AccountPageInput from "../components/AccountPageInput";
import MainPageLogo from "../assets/Logo.svg";
import { GoogleLogo } from "../assets/icons/index";
import { register, googleLogin } from "../services/authService";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) return;
        try {
            await register(email, password);
            navigate("/login");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="grid-container">
            <div className="left-grid">
                <Link to="/" className="signup-logo">
                    <img src={MainPageLogo} alt="logo-page" />
                </Link>

                <div className="signup-container">

                    <div className="signup-signup-container">
                        <Link to="/login" className="signup-signup-button">Sign in</Link>
                        <Link to="" className="signup-signup-button">Sign up</Link>
                    </div>

                    <button type="button" className="signup-google" onClick={googleLogin}>
                        <img src={GoogleLogo} alt="google-logo" />
                        Continue with Google account
                    </button>


                    <form className="signup-form" onSubmit={handleSubmit}>
                        <AccountPageInput
                            label="Email:" name="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} required
                        />

                        <AccountPageInput
                            label="Password:" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required
                        />

                        <AccountPageInput
                            label="Enter the password again:" name="passwordConfirm" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required
                        />

                        <AccountPageInput type="submit" value="Sign up" />

                    </form>


                    {/* Back button  */}
                    <div className="signup-back-button-container">
                        <Link to="/" className="signup-back-button">Back</Link>
                    </div>
                </div>
            </div>

            <div className="right-grid">

            </div>
        </div>
    );
}
