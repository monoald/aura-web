import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { MenuIcon } from '@heroicons/react/solid'
import '@styles/Header.css'
import MobileNavBar from './MobileNavBar';

const Header = () => {

  const navigation = [
    {name: 'Home', href: '/', current: true},
    {name: 'Projects', href: '/projects', current: false},
    {name: 'Home Loans', href: '/home-loans', current: false},
    {name: 'About us', href: '/about-us', current: false},
    {name: 'Work with us', href: '/work-with-us', current: false},
    {name: 'Contact', href: '/contact', current: false},
  ]

  const [toggleNavBar, setToggleNavBar] = useState(false);

  const handleMobileNavBar = () => { 
    setToggleNavBar(!toggleNavBar);
  }

  // const route = window.location.pathname;
  // console.log(route);

  return (
    <div className="Header">
      <h1 className="Header__logo">
        <a className='Header__home' href='/'>My Real Estate</a>
      </h1>

      <nav className='Header__nav-bar'>
        <ul className='list'>
          {navigation.map(item => (
            <li key={item.name}>
              {/* <NavLink className={`list__item ${(item.current) ? 'list__item--active' : ''}`}
                to={item.href}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </NavLink> */}
                <NavLink 
                // className='list__item' activeClassName='list__item--active'
                  className={({ isActive }) =>
                    isActive ? ' list__item list__item--active' : 'list__item'
                  }
                  to={item.href}
                >
                  {item.name}
                </NavLink>
            </li>
          ))}
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