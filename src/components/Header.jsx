import { useState } from 'react'
import { MenuIcon } from '@heroicons/react/solid'
import '@styles/Header.css'
import MobileNavBar from './MobileNavBar';

const Header = () => {

  const [toggleNavBar, setToggleNavBar] = useState(false);

  const handleMobileNavBar = () => { 
    setToggleNavBar(!toggleNavBar);
  }

  return (
    <div className="Header">
      <h1 className="Header__logo">
        <a className='Header__home' href='/'>My Real Estate</a>
      </h1>

      <nav className='Header__nav-bar'>
        <ul className='list'>
          <li>
            <a className='list__item' href='/'>Home</a>
          </li>

          <li>
            <a className='list__item' href='/'>Projects</a>
          </li>

          <li>
            <a className='list__item' href='/'>Home Loans</a>
          </li>

          <li>
            <a className='list__item' href='/'>About us</a>
          </li>

          <li>
            <a className='list__item' href='/'>Work with us</a>
          </li>

          <li>
            <a className='list__item' href='/'>Contact</a>
          </li>
        </ul>
    </nav>

      <div className='menu' onClick={handleMobileNavBar}>
        <MenuIcon />
      </div>

      {toggleNavBar &&
        <MobileNavBar handleMobileNavBar={handleMobileNavBar} />
      }
    </div>
  )
}

export default Header