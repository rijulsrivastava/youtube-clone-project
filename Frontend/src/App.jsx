import React, { useState } from 'react'
import Header from './components/Header'
import SideMenu from './components/SideMenu';
import { Outlet } from 'react-router';

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false) // to handle state for sidemenu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  // below is to get login info for user
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
  const [search, setSearch] = useState("") // to manage state for search text
  return (
    <div className="min-h-screen bg-white mx-2 sm:mx-4 md:mx-6 lg:mx-8">
      <Header toggleMenu={toggleMenu} user={user} setUser={setUser} setSearch={setSearch} />
      <div className="relative flex gap-4 mt-4 md:gap-6 md:mt-5 items-start">
        {isMenuOpen ? <SideMenu /> : null}
        <main className="flex-1 min-w-0">
          <Outlet context={{ setUser, setSearch, search, user }} /> {/*to pass search state and authentication*/}
        </main>
      </div>
    </div>
  )
}

export default App