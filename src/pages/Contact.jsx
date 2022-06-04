import { useRef } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Alert from "@components/Alert";
import IncompleteForm from "@components/IncompleteForm";
import useErrorMessage from '@hooks/useErrorMessage';
import useAlert from '@hooks/useAlert';
import useSubmit from '@hooks/useSubmit';
import facebookLogo from '@icons/facebook.svg';
import instagramLogo from '@icons/instagram.svg';
import linkedInLogo from '@icons/linkedin.svg';
import twitterLogo from '@icons/twitter.svg';
import '@styles/Contact.css';

const Contact = () => {
  const contactForm = useRef(null);
  const { errorMessage, showMessage, hideMessage } = useErrorMessage();
  const { alert, setAlert, toggleAlert } = useAlert();
  const { submit } = useSubmit();

  const form = {
    name: "contact-form",
    message: "Information sent, an Agent will contact you soon.",
  }

  return (
    <>
      <div className="Contact Page">
        <Header />

        <section className='media'>
          <h2 className='media__title'>Contact us in our official social media accounts.</h2>

          <figure className="media__container">
            <a className='media__image' href='/' target="_blank">
              <img src={facebookLogo} />
            </a>
            <a className='media__image' href='/' target="_blank">
              <img src={instagramLogo} />
            </a>
            <a className='media__image' href='/' target="_blank">
              <img src={linkedInLogo} />
            </a>
            <a className='media__image' href='/' target="_blank">
              <img src={twitterLogo} />
            </a>
          </figure>
        </section>

        <section className='message-container'>
          <form name='contact-form' action='/' className='contact-form' ref={contactForm}>
            <h2 className='contact-form__title'>Or send us a mail</h2>
            <div className='contact-form__item'>
              <label htmlFor="name" className="contact-form__subtitle">Name</label>
              <input type="text" name="name" placeholder="Carlos S. Aldazosa" className="contact-form__input" required/>
            </div>

            <div className='contact-form__item'>
              <label htmlFor="email" className="contact-form__subtitle">Email</label>
              <input type="email" name="email" placeholder="carlos@example.com" className="contact-form__input" required/>
            </div>

            <div className='contact-form__item message-form'>
              <label htmlFor="message" className="contact-form__subtitle">Message</label>
              <textarea  name="message" placeholder="Message..." className="contact-form__input message-form__input" required/>
            </div>

            <input type="submit" value='Send' className='contact-form__button'
              onClick={(event) => {
                event.preventDefault();
                submit(setAlert, hideMessage, showMessage, form);
              }}
            />
          </form>

          {errorMessage.active && (
            <IncompleteForm message={errorMessage.message} />
          )}
        </section>

        <Footer />
      </div>

      {alert.active && (
        <Alert alert={alert} handleClose={toggleAlert} />
      )}
    </>
  )
}

export default Contact