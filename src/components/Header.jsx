import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MenuIcon } from "@heroicons/react/solid";
import { XCircleIcon } from "@heroicons/react/solid"
import "@styles/Header.css";

const Header = () => {
  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "Projects", href: "/projects", current: false },
    { name: "Home Loans", href: "/home-loans", current: false },
    { name: "About us", href: "/about-us", current: false },
    { name: "Work with us", href: "/work-with-us", current: false },
    { name: "Contact", href: "/contact", current: false },
  ];

  const [toggleNavBar, setToggleNavBar] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMobileNavBar = () => {
    setToggleNavBar(!toggleNavBar);
  };

  const handleMenu = () => { 
    setToggleMenu(!toggleMenu);
  }

  return (
    <div className="Container">
      <div className="Header">
        <h1 className="Header__logo">
          <Link className="Header__home" to="/">
            My Real Estate
          </Link>
        </h1>

        {/* <nav className={(toggleMenu) ? "Header__nav-bar--active" : "Header__nav-bar"}>
          <ul className="list">
            {navigation.map((item) => (
              <li key={item.name}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? " list__item list__item--active" : "list__item"
                  }
                  to={item.href}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav> */}

        <div className="menu" onClick={handleMenu}>
          <MenuIcon />
        </div>

      </div>

      <nav className={(toggleMenu) ? "nav-bar nav-bar--active" : "nav-bar"}>
        <XCircleIcon className='close-menu' onClick={handleMenu} />

        <ul className="list">
          {navigation.map((item) => (
            <li key={item.name}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? " list__item list__item--active" : "list__item"
                }
                to={item.href}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* {toggleNavBar && <MobileNavBar handleMobileNavBar={handleMobileNavBar} />} */}
    </div>
  );
};

export default Header;
