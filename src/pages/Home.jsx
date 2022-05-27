import plan1 from '@images/plan1.png';
import plan2 from '@images/plan2.png';
import plan3 from '@images/plan3.png';
import monkeyBankLogo from '@images/monkeybank.png';
import bankKnowhere from '@images/bankknowhere.png';
import cityBank from '@images/citybank.png';
import "@styles/Home.css";

const Home = () => {
  return (
    <div className="Home">
      <section className="banner container">
        <figure className="banner__figure container__figure">
          <img
            className="banner__image"
            src="https://images.freejpg.com.ar/900/0705/buildings-city-urban-architecture-skyscrapers-F100025671.jpg"
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
            <img className='carousel__image' src={plan1} />
          </figure>

          <figure className='carousel__item'>
            <img className='carousel__image' src={plan2} />
          </figure>

          <figure className='carousel__item'>
            <img className='carousel__image' src={plan3} />
          </figure>

          <figure className='carousel__item'>
            <img className='carousel__image' src={plan1} />
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

        <button className='cta__button'>Find it now</button>
      </section>
    </div>
  );
};

export default Home;
