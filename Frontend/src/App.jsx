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
    return storedUser
      ? JSON.parse(storedUser)
      : null
  })

  return (
    <div className='m-5'>
      <Header toggleMenu={toggleMenu} user={user} setUser={setUser} />
      <div className='flex gap-5 mt-5'>
        {isMenuOpen ? <SideMenu /> : null}
        <main className="flex-1">
          <Outlet context={{ setUser }} />
        </main>
      </div>
    </div>
  )
}

export default App