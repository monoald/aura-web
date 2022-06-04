import Header from "@components/Header";
import Footer from "@components/Footer";
import '@styles/AboutUs.css'

const AboutUs = () => {
  return (
    <div className="AboutUs Page">
      <Header />

      <section className="banner">
        <div className="info">
          <p className="info__data">5</p>
  
          <h2 className="info__title">Projects</h2>
        </div>

        <div className="info">
          <p className="info__data">3</p>
  
          <h2 className="info__title">Cities</h2>
        </div>

        <div className="info">
          <p className="info__data">+100</p>
  
          <h2 className="info__title">Sold Apartments</h2>
        </div>

        <div className="info">
          <p className="info__data">+40</p>
  
          <h2 className="info__title">100% Home Loans</h2>
        </div>
      </section>

      <section className="text">
        <h2 className="text__title">About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima error commodi animi perspiciatis, explicabo culpa debitis ex molestias vero quidem nihil dolorum eum quod autem pariatur beatae assumenda hic placeat.
  Nemo architecto aliquid provident facere, porro sunt velit est magni a quam commodi ipsa nisi voluptas eaque nesciunt at adipisci, impedit quos iure amet dolore culpa omnis laudantium cupiditate. Laboriosam?
  Sunt accusamus possimus in veritatis, velit ad ducimus fuga eveniet, est necessitatibus corrupti architecto laboriosam itaque tempore? Iure voluptates ducimus deserunt tempore totam nam aspernatur minima, sequi porro laboriosam at!
  Assumenda repudiandae libero totam asperiores tempore velit iusto, porro est sapiente, cum ipsam quos veniam eaque aliquid nihil! Cupiditate voluptatem neque magni mollitia minima? Officiis incidunt voluptatem magni fuga asperiores.
  <br/>
  <br/>
  Nam beatae iusto aperiam unde blanditiis maxime, deserunt ea quidem magni esse odit quod sequi tempore minus ratione voluptatem ducimus consequuntur laudantium dolorum id. Asperiores tenetur et itaque nostrum tempore.
  Repellat, beatae, eveniet numquam culpa corporis, corrupti facere dolorem sint porro doloribus natus rerum facilis saepe. Hic earum dolorem assumenda molestiae asperiores est atque nisi distinctio unde quas, quisquam itaque.
        </p>
      </section>

      <div className="extra">
        <h2 className="extra__title">My Real Estate</h2>
        <div className="info">
          <p className="info__data">4</p>
          <h3 className="info__title">Years of experience</h3>
        </div>
      </div>

      <section className="regulatory">
        <h2 className="regulatory__title">Certified By</h2>

        <figure className="regulatory__item">
          <img className="regulatory__image" src="https://www.arello.org/images/arello-logo-2021.png" />

          <img className="regulatory__image" src="https://www.nar.realtor/sites/all/themes/gesso/images/nar-logo-2020.svg" />

          <img className="regulatory__image" src="https://www.rera.gov.bh/en/images/logo-RERA.png" />
        </figure>
      </section>

      <Footer />
    </div>
  )
}

export default AboutUs
