import { Link } from 'react-router-dom';
import Header from '@components/Header';
import Footer from '@components/Footer';
import building from '@images/buildings.webp';
import luxPlan from '@images/luxPlan.webp';
import goldenMountainPlan from '@images/goldenMountainPlan.webp';
import lionPlan from '@images/lionPlan.webp';
import monkeyBankLogo from '@images/monkeybank.webp';
import bankKnowhere from '@images/bankknowhere.webp';
import cityBank from '@images/citybank.webp';
import "@styles/Home.css";

const Home = () => {
  return (
    <div className="Home Page">
      <Header />
      
      <section className="banner container">
        <figure className="banner__figure container__figure">
          <img
            className="banner__image"
            src={building}
            alt="New Building"
            loading='lazy'
          />
        </figure>

        <div className="gradient"></div>

        <div className="banner__text container__text">
          <h2>Find your ideal apartment.</h2>
          <p>Look in multiple zones and cities</p>
        </div>
      </section>

      <section className="plans container">
        <div className='carousel'>
          <figure className='carousel__item'>
            <img className='carousel__image' src={luxPlan} alt="Building Plan" loading='lazy'/>
          </figure>

          <figure className='carousel__item'>
            <img className='carousel__image' src={goldenMountainPlan} alt="Building Plan" loading='lazy'/>
          </figure>

          <figure className='carousel__item'>
            <img className='carousel__image' src={lionPlan} alt="Building Plan" loading='lazy'/>
          </figure>

          <figure className='carousel__item'>
            <img className='carousel__image' src={luxPlan} alt="Building Plan" loading='lazy'/>
          </figure>
        </div>

        <div className='gradient'></div>

        <div className='plans__text container__text'>
          <h2>Find your ideal apartment.</h2>
          <p>Look in multiple zones and cities</p>
        </div>
      </section>

      <section className='partners'>
        <div className='partners__text'>
          <h3>Finance your new apartment</h3>
          <p>Talk with our partners</p>
        </div>

        <div className='partners__logos'>
            <figure className="partners__figure">
              <img className="partners__image" alt='Bank' 
                src={monkeyBankLogo} 
                width={151} 
                height={151} 
              />
            </figure>
            <figure className="partners__figure">
              <img className="partners__image" alt='Bank' 
                src={bankKnowhere} 
                width={151} 
                height={151} 
              />
            </figure>
            <figure className="partners__figure">
              <img className="partners__image" alt='Bank' 
                src={cityBank} 
                width={151} 
                height={151} 
              />
            </figure>

        </div>
      </section>

      <section className='cta'>
        <div className='cta__text'>
          <h2>Search the apartment of your dreams</h2>
        </div>

        <Link to='/projects'>
          <button className='button'>Find it now</button>
        </Link>
      </section>
      
      <Footer />
      </div>
    );
};

export default Home;
