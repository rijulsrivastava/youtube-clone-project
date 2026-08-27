import React, { useState } from 'react'
import Header from './components/Header'
import SideMenu from './components/SideMenu';
import HomePage from './components/HomePage';
import RegisterUser from './components/RegisterUser';

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(true)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className='m-5'>
      <Header toggleMenu={toggleMenu} />
      {/* <div className='flex gap-5 mt-5'>
        {isMenuOpen ? <SideMenu /> : null}
        <HomePage />
      </div> */}
      <RegisterUser />
    </div>
  )
}

export default App