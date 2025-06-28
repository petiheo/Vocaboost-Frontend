import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { GoogleLogo } from "../assets/icons/index";

export default function ResetPassword() {
  const [password, setPassword] = useState("");

  // Restore session from URL token (very important!)
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "PASSWORD_RECOVERY") {
        console.log(" Session restored from recovery link");
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleReset = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      alert("Không thể cập nhật mật khẩu: " + error.message);
    } else {
      alert("Mật khẩu đã được cập nhật!");
    }
  };

  return (
    <div className="reset">
      <form className="reset__form" onSubmit={handleReset}>
        <h2>Reset your password</h2>
        <label htmlFor="new-password">Enter your new password:</label>
        <input
          id="new-password"
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
