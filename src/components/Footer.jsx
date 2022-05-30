import { Link } from 'react-router-dom';
import facebookLogo from '@icons/facebook.svg';
import instagramLogo from '@icons/instagram.svg';
import linkedInLogo from '@icons/linkedin.svg';
import twitterLogo from '@icons/twitter.svg';
import '@styles/Footer.css'

const Footer = () => {
  return (
    <footer className="Footer">
      <section className="company">
        <h2 className="company__name">My Real Estate</h2>
        
        <figure className="company__social-media">
          <a className='social-media' href='/'>
            <img src={facebookLogo} />
          </a>
          <a className='social-media' href='/'>
            <img src={instagramLogo} />
          </a>
          <a className='social-media' href='/'>
            <img src={linkedInLogo} />
          </a>
          <a className='social-media' href='/'>
            <img src={twitterLogo} />
          </a>
        </figure>
      </section>

      <nav className='nav-bar'>
        <ul className='list'>
          <h2 className='list__name'><Link to='/projects'>Projects</Link></h2>

          <li className='list__item'>
            <Link to='/projects#lux' className='list__text'>Lux</Link>
          </li>

          <li className='list__item'>
            <Link to='/projects#goldenMountain' className='list__text'>Golden Mountain</Link>
          </li>

          <li className='list__item'>
            <Link to='/projects#lion' className='list__text'>Lion</Link>
          </li>
        </ul>

        <ul className='list'>
          <h2 className='list__name'><a href='/'>Bank Partners</a></h2>

          <li className='list__item'>
            <a href='/' className='list__text'>Monkey Bank</a>
          </li>

          <li className='list__item'>
            <a href='/' className='list__text'>Bank of Knowhere</a>
          </li>

          <li className='list__item'>
            <a href='/' className='list__text'>City Bank</a>
          </li>
        </ul>

        <ul className='list'>
          <h2 className='list__name'><a href='/'>Others</a></h2>

          <li className='list__item'>
            <a href='/' className='list__text'>About us</a>
          </li>

          <li className='list__item'>
            <a href='/' className='list__text'>Work with us</a>
          </li>

          <li className='list__item'>
            <a href='/' className='list__text'>Contact</a>
          </li>
        </ul>
      </nav>

      <div className='message'>
        <p>
          This site is a <strong>case study</strong> built by <a href='/'>Carlos S. Aldazosa</a>. You can see my projects <a href='/'>here</a>.
        </p>
      </div>
    </footer>
  )
}

export default Footer