import { useRef, useState, useEffect } from 'react';
import Header from '@components/Header';
import PartnerDetails from '@components/PartnerDetails';
import Footer from '@components/Footer';
import monkeyBankLogo from '@images/monkeybank.png';
import bankKnowhere from '@images/bankknowhere.png';
import cityBank from '@images/citybank.png';
import '@styles/HomeLoans.css'

const HomeLoans = () => {
  const loanForm = useRef(null);
  const [partners, setPartners] = useState([
    {
      id: 'monkeyBank',
      logo: monkeyBankLogo,
      interest: [5.5, 6.5],
      minFinancing: 20,
      maxFinancing: 100,
      maxTermYears: 20,
      selected: true,
    },
    {
      id: 'bankOfKnowhere',
      logo: bankKnowhere,
      interest: [3.5, 5.5],
      minFinancing: 10,
      maxFinancing: 80,
      maxTermYears: 30,
      selected: false,
    },{
      id: 'cityBank',
      logo: cityBank,
      interest: [5, 6.5],
      minFinancing: 25,
      maxFinancing: 90,
      maxTermYears: 15,
      selected: false,
    },
  ]);

  const handleBankSelected = ( selected ) => { 
    const newBank = [...partners];
    const bankDeselected = newBank.find((partner) => partner.selected === true);
    bankDeselected.selected = !bankDeselected.selected;
    const bankSelected = newBank.find((partner) => partner.id === selected);
    bankSelected.selected = !bankSelected.selected;
    setPartners(newBank);
  }

  return (
    <div className="HomeLoans">
      <Header />

      <section className='banner'>
        <h1 className='banner__title'>Find the best home loan for you</h1>

        <p className='banner__subtitle'>Talk with our bank partners</p>

      </section>

      <section className='partners-comparison' >
        <div className='title'>
          <p className='title__head-space title__item'></p>

          <p className='titile__interest title__item'>Interest</p>
          <p className='titile__min-financing title__item'>Min. Financing</p>
          <p className='titile__max-financing title__item'>Max. Financing</p>
          <p className='titile__max-term-years title__item'>Max. Term Years</p>
          <p className='title__foot-space title__item'></p>
        </div>

        {partners.map(partner => (
          <PartnerDetails partner={partner} key={partner.id} handleBankSelected={handleBankSelected} />
        ))}
        
      </section>

      <section className='loan-contact' id='contact'>
        <h2 className='loan-contact__title'>Contact Bank</h2>

        <form action='/' className='loan-form' ref={loanForm}>
          <div className='loan-form__item'>
            <label htmlFor="name" className="loan-form__name loan-form__subtitle">Name</label>
            <input type="text" name="name" placeholder="Carlos Aldazosa" className="loan-form__input" required/>
          </div>

          <div className='loan-form__item'>
            <label htmlFor="email" className="loan-form__email loan-form__subtitle">Email</label>
            <input type="email" name="email" placeholder="carlos.aldazosa@example.com" className="loan-form__input" required/>
          </div>

          <div className='loan-form__item'>
            <label htmlFor="phone" className="loan-form__phone loan-form__subtitle">Phone</label>
            <input type="number" name="phone" placeholder="+591 12345678" className="loan-form__input" required/>
          </div>

          <div className='loan-form__item'>
            <label htmlFor="bank" className="loan-form__bank loan-form__subtitle">Phone</label>
            <select
              id="bank"
              name="bank"
              className="loan-form__input loan-form__select"
              required
            >
              <option value="monkeBank" selected={partners[0].selected} >Monkey Bank</option>
              <option value="bankOfKnowhere" selected={partners[1].selected}>Bank of Knowhere</option>
              <option value="cityBank" selected={partners[2].selected}>City Bank</option>
            </select>
          </div>

          <input type='submit' className='loan-form__submit' value='Send'/>
        </form>
      </section>

      <Footer />
    </div>
  )
}

export default HomeLoans