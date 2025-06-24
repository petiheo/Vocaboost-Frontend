import { useState } from 'react'
import {Outlet} from 'react-router-dom'
import NavBar from './components/Navbar'
import MainPage from './pages/MainPage'
function App() {
  return (
  <>
    <NavBar/>
    <Outlet/>
  </>
)}

export default App;
