import { useRef, useState } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import '@styles/WorkWithUs.css';

const WorkWithUs = () => {
  const hireUsForm = useRef(null)
  const [form, setForm] = useState([
    {
      id: 'hireUs',
      active: true,
    },
    {
      id: 'career',
      active: false,
    }
  ])

  const handleForm = (id) => { 
    const newForm = [...form];
    const deactiveForm = newForm.find(form => form.active === true);
    deactiveForm.active = !deactiveForm.active;
    const activeForm = newForm.find(form => form.id === id);
    activeForm.active = !activeForm.active;
    setForm(newForm);
  }

  return (
    <div className="WorkWithUs">
      <Header />

      <section className='banner'>
        <h2 className='banner__title'>You can hire us or work in our company!</h2>

        <div className='banner__buttons'>
          <button className='button' onClick={() => handleForm(form[0].id)}>Hire us</button>
          <button className='button' onClick={() => handleForm(form[1].id)}>Career</button>
        </div>
      </section>

      <section className='forms'>
        { form[0].active &&
          <form action='/' className='work-form' ref={hireUsForm} >

            <h2 className='work-form__title'>Hire Us</h2>

            <div className='work-form__item'>
              <label htmlFor="name" className="work-form__subtitle">Company</label>
              <input type="text" name="name" placeholder="My real estate" className="work-form__input" required/>
            </div>

            <div className='work-form__item'>
              <label htmlFor="email" className="work-form__subtitle">Email</label>
              <input type="email" name="email" placeholder="myrealestate@example.com" className="work-form__input" required/>
            </div>

            <div className='work-form__item'>
              <label htmlFor="phone" className="work-form__subtitle">Phone</label>
              <input type="number" name="phone" placeholder="+591 12345678" className="work-form__input" required/>
            </div>

            <div className='work-form__item'>
              <label htmlFor="city" className="work-form__subtitle">City</label>
              <input type="text" name="city" placeholder="La Paz" className="work-form__input" required/>
            </div>

            <input type="submit" className='work-form__button' />
          </form>
        }

        { form[1].active && 
          <form action='/' className='work-form' ref={hireUsForm} >

            <h2 className='work-form__title'>Career</h2>

            <div className='work-form__item'>
              <label htmlFor="name" className="work-form__subtitle">Name</label>
              <input type="text" name="name" placeholder="Carlos S. Aldazosa" className="work-form__input" required/>
            </div>

            <div className='work-form__item'>
              <label htmlFor="email" className="work-form__subtitle">Email</label>
              <input type="email" name="email" placeholder="carlos@example.com" className="work-form__input" required/>
            </div>

            <div className='work-form__item'>
              <label htmlFor="phone" className="work-form__subtitle">Phone</label>
              <input type="number" name="phone" placeholder="+591 12345678" className="work-form__input" required/>
            </div>

            <div className='work-form__item'>
              <label htmlFor="area" className="work-form__subtitle">Area</label>
              <select
                id="area"
                name="area"
                className="loan-form__input loan-form__select"
                required
              >
                <option value="development">Development</option>
                <option value="economics">Economics</option>
                <option value="finance">Finance</option>
                <option value="marketing">Marketing</option>
                <option value="sales">Sales</option>
                <option value="engineering">Engineering</option>
                <option value="design">Design</option>
                <option value="architecture">Architecture</option>
                <option value="construction">Construction</option>
              </select>
            </div>

            <input type="submit" className='work-form__button' />
          </form>
        }

      </section>



      <Footer />
    </div>
  )
}

export default WorkWithUs