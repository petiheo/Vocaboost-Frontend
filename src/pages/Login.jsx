import "../assets/icons/index";
import { Link } from "react-router-dom";
import AccountPageInput from "../components/AccountPageInput"
import MainPageLogo from "../assets/Logo.svg"
import { GoogleLogo } from "../assets/icons/index";

export default function Login() {
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

                    <Link to="" className="login-google">
                        <img src={GoogleLogo} alt="google-logo" />
                        Sign in with Google account
                    </Link>


                    <form className="login-form">
                        <AccountPageInput
                            label="Email:" name="username" type="text" placeholder="" required
                        />

                        <AccountPageInput
                            label="Password:" name="password" type="password" placeholder="" required
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