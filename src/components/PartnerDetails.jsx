import '@styles/PartnerDetails.css';

const PartnerDetails = ({ partner }) => {
  return (
    <div className='partner'>
      <figure className='partner__image partner__item'>
        <img src={partner.logo} className='partner__logo'/>
      </figure>

      <p className='partner__interest partner__item'>{`${partner.interest[0]} - ${partner.interest[1]}%`}</p>
      <p className='partner__item'>{partner.minFinancing}%</p>
      <p className='partner__item'>{partner.maxFinancing}%</p>
      <p className='partner__item'>{partner.maxTermYears} years</p>
      <div className=' partner__item'>
        <button className='partner__contact'>Contact</button>
      </div>
    </div>
  )
}

export default PartnerDetails