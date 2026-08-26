import React, { useState } from 'react'
import Header from './components/Header'
import SideMenu from './components/SideMenu';

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(true)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className='m-5'>
      <Header toggleMenu={toggleMenu} />
      {isMenuOpen ? <SideMenu /> : null}
    </div>
  )
}

export default App