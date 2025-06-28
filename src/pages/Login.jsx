import "../assets/icons/index";
import { Link } from "react-router-dom";
import AccountPageInput from "../components/AccountPageInput"
import MainPageLogo from "../assets/Logo.svg"
import { GoogleLogo } from "../assets/icons/index";
// import { supabase } from '../supabaseClient'
import { useNavigate } from 'react-router-dom' // Import useNavigate for navigation
import authService from "../services/authService";

// const handleGoogleLogin = async () => {
//   const { data, error } = await supabase.auth.signInWithOAuth({
//     provider: 'google',
//   });
//   if (error) console.error(error);
// };

// export default function Login() {
    
//     const navigate = useNavigate()

//     const handleLogin = async (e) => {
//     e.preventDefault()

//     const email = e.target.email.value
//     const password = e.target.password.value

//     const { data, error } = await supabase.auth.signInWithPassword({
//         email,
//         password,
//     })

//     if (error) {
//         alert("Sai email hoặc mật khẩu!")
//         console.error(error)
//     } else {
//         alert("Đăng nhập thành công!")
//         console.log(data)
//         navigate("/homepage")
//     }
//     }

const handleGoogleLogin = () => {
  window.location.href = "http://localhost:3000/api/auth/google";
};

export default function Login() {
    
    const navigate = useNavigate()

    const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
        const res = await authService.login(email, password);
        alert(res.message || "Đăng nhập thành công!");
        navigate("/homepage");
    } catch (error) {
        alert(error.response?.data?.error || "Sai email hoặc mật khẩu!");
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

                    <Link onClick={handleGoogleLogin} className="login-google">
                        <img src={GoogleLogo} alt="google-logo" />
                        Sign in with Google account
                    </Link>


                    <form className="login-form" onSubmit={handleLogin}>
                        <AccountPageInput
                            label="Email:" name="email" type="text" placeholder="Enter your email" required
                        />

                        <AccountPageInput
                            label="Password:" name="password" type="password" placeholder="Enter password" required
                        />

                        <div className="login-forgot-password">
                            <Link to="/forgot-password">Forgot password?</Link>
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