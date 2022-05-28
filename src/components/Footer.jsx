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
          <h2 className='list__name'>Projects</h2>

          <li className='list__item'>
            <a href='/' className='list__text'>Lux</a>
          </li>

          <li className='list__item'>
            <a href='/' className='list__text'>Golden Mountain</a>
          </li>

          <li className='list__item'>
            <a href='/' className='list__text'>Lion</a>
          </li>
        </ul>

        <ul className='list'>
          <h2 className='list__name'>Bank Partners</h2>

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
          <h2 className='list__name'>Others</h2>

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