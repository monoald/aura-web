import Header from '@components/Header';
import PartnerDetails from '@components/PartnerDetails';
import Footer from '@components/Footer';
import monkeyBankLogo from '@images/monkeybank.png';
import bankKnowhere from '@images/bankknowhere.png';
import cityBank from '@images/citybank.png';
import '@styles/HomeLoans.css'

const HomeLoans = () => {
  const partners = [
    {
      id: 'monkeyBank',
      logo: monkeyBankLogo,
      interest: [5.5, 6.5],
      minFinancing: 20,
      maxFinancing: 100,
      maxTermYears: 20
    },
    {
      id: 'bankOfKnowhere',
      logo: bankKnowhere,
      interest: [3.5, 5.5],
      minFinancing: 10,
      maxFinancing: 80,
      maxTermYears: 30
    },{
      id: 'cityBank',
      logo: cityBank,
      interest: [5, 6.5],
      minFinancing: 25,
      maxFinancing: 90,
      maxTermYears: 15
    },
  ];

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
          <PartnerDetails partner={partner} key={partner.id} />
        ))}
        
      </section>

      <Footer />
    </div>
  )
}

export default HomeLoans