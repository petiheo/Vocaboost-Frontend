import { useState } from "react";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";
import MainPageLogo from "../assets/Logo.svg";
import { GoogleLogo } from "../assets/icons/index";


export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSend = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:5173/reset-password",
    });

    if (error) {
      alert("Lỗi gửi email: " + error.message);
    } else {
      alert("Đã gửi email đặt lại mật khẩu! Kiểm tra hộp thư của bạn.");
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
