import "../assets/icons/index";
import { Link } from "react-router-dom";
import AccountPageInput from "../components/AccountPageInput"
import MainPageLogo from "../assets/Logo.svg"
import { GoogleLogo } from "../assets/icons/index";

export default function SignUp() {
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

                    <Link to="" className="signup-google">
                        <img src={GoogleLogo} alt="google-logo" />
                        Continue with Google account
                    </Link>


                    <form className="signup-form">
                        <AccountPageInput
                            label="Email:" name="username" type="text" placeholder="" required
                        />

                        <AccountPageInput
                            label="Password:" name="password" type="password" placeholder="" required
                        />
                    
                        <AccountPageInput
                            label="Enter the password again:" name="password" type="password" placeholder="" required
                        />

                        <AccountPageInput type="submit" value="Sign in" />

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