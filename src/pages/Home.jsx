import '@styles/Home.css'

const Home = () => {
  return (
    <div className="Home">
        <section className='Home__banner banner'>
          <div className='banner__text'>
            <h2>Find your ideal apartment.</h2>
            <p>Look in multiple zones and cities</p>
          </div>
          <div className='banner__gradient'></div>
          <figure className='banner__image'>
            <img className='image' src='https://images.freejpg.com.ar/900/0705/buildings-city-urban-architecture-skyscrapers-F100025671.jpg' />
          </figure>
        </section>
    </div>
  )
}

export default Home