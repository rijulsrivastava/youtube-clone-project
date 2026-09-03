import React, { useState } from 'react'
import Header from './components/Header'
import SideMenu from './components/SideMenu';
import HomePage from './components/HomePage';
import RegisterUser from './components/RegisterUser';
import Login from './components/Login';
import { Outlet } from 'react-router';

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user")
    if (!storedUser) return null
    try {
      return JSON.parse(storedUser)
    } catch (err) {
      console.error("Invalid user data:", err)
      localStorage.removeItem("user")
      return null
    }
  })
  const [search, setSearch] = useState("")
  return (
    <div className="min-h-screen bg-white mx-2 sm:mx-4 md:mx-6 lg:mx-8">
      <Header toggleMenu={toggleMenu} user={user} setUser={setUser} setSearch={setSearch} />
      <div className="relative flex gap-4 mt-4 md:gap-6 md:mt-5 items-start">
        {isMenuOpen ? <SideMenu /> : null}
        <main className="flex-1 min-w-0">
          <Outlet context={{ setUser, setSearch, search, user }} />
        </main>
      </div>
    </div>
  )
}

export default App