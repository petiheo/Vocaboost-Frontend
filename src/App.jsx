import { useEffect } from 'react'
import { supabase } from './supabaseClient'
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import NavBar from './components/Navbar'
import AuthSuccess from "./pages/AuthSuccess";

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        console.log('✅ Logged in user:', user)
        // Nếu muốn redirect:
        navigate('/homepage')
      }
    }
    getUser()
  }, [])

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/auth/success" element={<AuthSuccess />} />
        <Route path="/homepage" element={<HomePage />} />
        {/* thêm các route khác */}
      </Routes>
      <Outlet />
    </>
  )
}

export default App
