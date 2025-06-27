import "../assets/icons/index";
import { Link } from "react-router-dom";
import AccountPageInput from "../components/AccountPageInput"
import MainPageLogo from "../assets/Logo.svg"
import { GoogleLogo } from "../assets/icons/index";

import { supabase } from '../supabaseClient'

const handleSignUp = async (e) => {
  e.preventDefault()

  const email = e.target.email.value
  const password = e.target.password.value
  const confirmPassword = e.target.confirmPassword.value

  if (password !== confirmPassword) {
    alert("Mật khẩu nhập lại không khớp!")
    return
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    alert("Lỗi đăng ký: " + error.message)
    console.error(error)
  } else {
    alert("Đăng ký thành công! Hãy kiểm tra email để xác nhận.")
    console.log(data)
  }
}

const handleGoogleSignUp = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:5173", // thay bằng domain của bạn khi deploy
    },
  });

  if (error) {
    alert("Lỗi Google sign-in: " + error.message);
    console.error(error);
  }
};


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

                    <Link onClick={handleGoogleSignUp} className="signup-google">
                        <img src={GoogleLogo} alt="google-logo" />
                        Continue with Google account
                    </Link>


                    <form className="signup-form" onSubmit={handleSignUp}>
                    <AccountPageInput
                        label="Email:" name="email" type="text" placeholder="Enter your email" required
                    />

                    <AccountPageInput
                        label="Password:" name="password" type="password" placeholder="Enter password" required
                    />

                    <AccountPageInput
                        label="Enter the password again:" name="confirmPassword" type="password" placeholder="Repeat password" required
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