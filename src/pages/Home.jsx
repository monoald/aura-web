import plan1 from '@images/plan1.png';
import plan2 from '@images/plan2.png';
import plan3 from '@images/plan3.png';
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
    </div>
  );
};

export default Home;
