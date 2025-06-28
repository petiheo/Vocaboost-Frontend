import { useState } from "react";
import { Link } from "react-router-dom";
import MainPageLogo from "../assets/Logo.svg";
import { GoogleLogo } from "../assets/icons/index";

// import { supabase } from "../supabaseClient";

// export default function ForgotPassword() {
//   const [email, setEmail] = useState("");

//   const handleSend = async (e) => {
//     e.preventDefault();

//     const { error } = await supabase.auth.resetPasswordForEmail(email, {
//       redirectTo: "http://localhost:5173/reset-password",
//     });

//     if (error) {
//       alert("Lỗi gửi email: " + error.message);
//     } else {
//       alert("Đã gửi email đặt lại mật khẩu! Kiểm tra hộp thư của bạn.");
//     }
//   };


import authService from "../services/authService";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSend = async (e) => {
    e.preventDefault();
    try {
      const res = await authService.forgotPassword(email);
      alert(res.message || "Đã gửi email đặt lại mật khẩu!");
    } catch (error) {
      alert(error.response?.data?.error || "Lỗi gửi email");
    }
  };

  return (
    <div className="forgot">
    <form className="forgot__form" onSubmit={handleSend}>
        <h2>Forgot your password?</h2>

        <label htmlFor="email">Enter your email:</label>
        <input
        id="email"
        type="email"
        placeholder="example@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        />

        <button type="submit">Submit</button>
    </form>
    </div>
  );
}
