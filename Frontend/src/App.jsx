import React, { useState } from 'react'
import Header from './components/Header'
import SideMenu from './components/SideMenu';
import HomePage from './components/HomePage';
import RegisterUser from './components/RegisterUser';
import Login from './components/Login';
import { Outlet } from 'react-router';

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(true)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("demo-user")
    if (!storedUser) return null
    try {
      return JSON.parse(storedUser)
    } catch (err) {
      console.error("Invalid demo-user data:", err)
      localStorage.removeItem("demo-user")
      return null
    }
  })
  const [search, setSearch] = useState("")
  return (
    <div className='m-5'>
      <Header toggleMenu={toggleMenu} user={user} setUser={setUser} setSearch={setSearch} />
      <div className='flex gap-5 mt-5'>
        {isMenuOpen ? <SideMenu /> : null}
        <main className="flex-1">
          <Outlet context={{ setUser, setSearch, search, user }} />
        </main>
      </div>
    </div>
  )
}

export default App