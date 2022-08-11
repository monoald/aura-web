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
            <img src={facebookLogo}
              alt="social media account"
              width={24}
              height={24}
            />
          </a>
          <a className='social-media' href='/'>
            <img src={instagramLogo}
              alt="social media account"
              width={24}
              height={24}
            />
          </a>
          <a className='social-media' href='/'>
            <img src={linkedInLogo}
              alt="social media account"
              width={24}
              height={24}
            />
          </a>
          <a className='social-media' href='/'>
            <img src={twitterLogo}
              alt="social media account"
              width={24}
              height={24}
            />
          </a>
        </figure>
      </section>

      <nav className='Footer__nav-bar'>
        <ul className='list'>
          <li className='list__name'>
            <Link to='/projects'>Projects</Link>
          </li>

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
          <li className='list__name'>
            <Link to='/home-loans'>Bank Partners</Link>
          </li>

          <li className='list__item'>
            <Link to='/home-loans#partners' className='list__text'>Monkey Bank</Link>
          </li>

          <li className='list__item'>
            <Link to='/home-loans#partners' className='list__text'>Bank of Knowhere</Link>
          </li>

          <li className='list__item'>
            <Link to='/home-loans#partners' className='list__text'>City Bank</Link>
          </li>
        </ul>

        <ul className='list'>
          <li className='list__name'>
            Others
          </li>

          <li className='list__item'>
            <Link to='/about-us' className='list__text'>About us</Link>
          </li>

          <li className='list__item'>
            <Link to='/work-with-us' className='list__text'>Work with us</Link>
          </li>

          <li className='list__item'>
            <Link to='/contact' className='list__text'>Contact</Link>
          </li>
        </ul>
      </nav>

      <div className='message'>
        <p>
          This site is a <strong>case study</strong> built by <a href='/'>Carlos S. Aldazosa</a>. You can see my projects on my <a href='/'>Portfolio</a>.
        </p>
      </div>
    </footer>
  )
}

export default Footer