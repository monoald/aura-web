import '@styles/PartnerDetails.css';
import { Link } from 'react-router-dom';

const PartnerDetails = ({ partner, handleBankSelected }) => {
  return (
    <div className='partner'>
      <figure className='partner__image partner__item'>
        <img src={partner.logo} className='partner__logo' alt='Partner Logo' width={60} height={60} loading="lazy"/>
      </figure>

      <p className='partner__interest partner__item'>{`${partner.interest[0]} - ${partner.interest[1]}%`}</p>
      <p className='partner__item'>{partner.minFinancing}%</p>
      <p className='partner__item'>{partner.maxFinancing}%</p>
      <p className='partner__item'>{partner.maxTermYears} years</p>
      <div className=' partner__item'>
        <a href='#contact'>
          <button className='partner__contact' onClick={() => handleBankSelected(partner.id)}>Contact</button>
        </a>
      </div>
    </div>
  )
}

export default PartnerDetails