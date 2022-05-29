import { useState } from 'react'
import { Link } from 'react-router-dom';
import { MenuIcon } from '@heroicons/react/solid'
import '@styles/Header.css'
import MobileNavBar from './MobileNavBar';

const Header = () => {

  const navigation = [
    {name: 'Home', href: '/', current: true},
    {name: 'Projects', href: '/projects', current: false},
    {name: 'Home Loans', href: '/', current: false},
    {name: 'About us', href: '/', current: false},
    {name: 'Work with us', href: '/', current: false},
    {name: 'Contact', href: '/', current: false},
  ]

  const [toggleNavBar, setToggleNavBar] = useState(false);

  const handleMobileNavBar = () => { 
    setToggleNavBar(!toggleNavBar);
  }

  const route = window.location.pathname;
  console.log(route);

  return (
    <div className="Header">
      <h1 className="Header__logo">
        <a className='Header__home' href='/'>My Real Estate</a>
      </h1>

      <nav className='Header__nav-bar'>
        <ul className='list'>
          {navigation.map(item => (
            <li key={item.name}>
              <Link className={`list__item ${(item.current) ? 'list__item--active' : ''}`}
                to={item.href}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Link>
            </li>
          ))}
          {/* <li>
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
          </li> */}
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