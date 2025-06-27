import { useEffect } from 'react'
import { supabase } from './supabaseClient'
import { Outlet, useNavigate } from 'react-router-dom'
import NavBar from './components/Navbar'

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
      <Outlet />
    </>
  )
}

export default App
