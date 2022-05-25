import { XCircleIcon } from "@heroicons/react/solid"
import '@styles/MobileNavBar.css'

const MobileNavBar = ({ handleMobileNavBar }) => {
  return (
    <nav className='Mobile-nav-bar'>
        <XCircleIcon className='close-nav-bar'
          onClick={handleMobileNavBar}
        />

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
            <a className='list__item' href='/'>Pricing</a>
          </li>

          <li>
            <a className='list__item' href='/'>Work with us</a>
          </li>

          <li>
            <a className='list__item' href='/'>Contact us</a>
          </li>
        </ul>
    </nav>
  )
}

export default MobileNavBar