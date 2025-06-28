import api from "../lib/api";

const authService = {
  register: async (data) => {
    const res = await api.post("/register", data);
    return res.data;
  },

  login: async (email, password) => {
    const res = await api.post("/login", { email, password });
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    return res.data;
  },

  logout: async () => {
    const token = localStorage.getItem("token");
    await api.post("/logout", {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },

  forgotPassword: async (email) => {
    return await api.post("/forgot-password", { email });
  },

  resetPassword: async (newPassword) => {
    // Bạn cần endpoint cụ thể nếu backend hỗ trợ đổi mật khẩu bằng token
  },

  getToken: () => localStorage.getItem("token"),
  getCurrentUser: () => {
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  },
  isAuthenticated: () => !!localStorage.getItem("token")
};

export default authService;