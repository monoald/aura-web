import Header from '@components/Header';
import '@styles/Projects.css'

const Projects = () => {
  return (
    <div className="Projects">
      <Header />

      <section className='banner section'>

        <span className='banner__border'></span>
        <span className='banner__border'></span>
        
        <div className='banner__item lux'>
          <h2 className='banner__text'>Lux</h2>
        </div>

        <div className='banner__item goldenMountain'>
          <h2 className='banner__text'>Golden Mountain</h2>
        </div>

        <div className='banner__item lion'>
          <h2 className='banner__text'>Lion</h2>
        </div>
      </section>
    </div>
  )
}

export default Projects