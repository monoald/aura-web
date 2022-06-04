import { Link } from 'react-router-dom';
import Header from '@components/Header';
import Footer from '@components/Footer';
import building from '@images/buildings.jpg';
import luxPlan from '@images/luxPlan.png';
import goldenMountainPlan from '@images/goldenMountainPlan.png';
import lionPlan from '@images/lionPlan.png';
import monkeyBankLogo from '@images/monkeybank.png';
import bankKnowhere from '@images/bankknowhere.png';
import cityBank from '@images/citybank.png';
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
            <img className='carousel__image' src={luxPlan} />
          </figure>

          <figure className='carousel__item'>
            <img className='carousel__image' src={goldenMountainPlan} />
          </figure>

          <figure className='carousel__item'>
            <img className='carousel__image' src={lionPlan} />
          </figure>

          <figure className='carousel__item'>
            <img className='carousel__image' src={luxPlan} />
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
          <figure className='partners__figure'>
            <img className='partners__image' src={monkeyBankLogo} />
          </figure>

          <figure className='partners__figure'>
            <img className='partners__image' src={bankKnowhere} />
          </figure>

          <figure className='partners__figure'>
            <img className='partners__image' src={cityBank} />
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
