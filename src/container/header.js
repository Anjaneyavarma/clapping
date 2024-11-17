import React from 'react'
import '../App.css'
import logo from '../assets/headerlogo.png'

function Header() {
  return (
    <React.Fragment>
        <header className="App-header">
          <img className='header-logo' src={logo} alt='logo'/>
        </header>
    </React.Fragment>
  )
}

export default Header