import Header from '@components/Header';
import '@styles/Projects.css'
import ProjectSection from '@components/ProjectSection';
import Footer from '@components/Footer';
import luxImage from '@images/luxInside.jpg';
import luxPlans from '@images/luxPlan.png';
import goldenMountainImage from '@images/goldenMountainInside.jpg';
import goldenMountainPlans from '@images/goldenMountainPlan.png';
import lionImage from '@images/lionInside.jpg';
import lionPlans from '@images/lionPlan.png';

const Projects = () => {
  const projects = [
    {
      name: 'Lux',
      id: 'lux',
      images: {
        insideImage: luxImage,
        plansImage: luxPlans,
      },
      data: {
        bedrooms: 2,
        bathrooms: 2,
        mts: 120,
        price: 100000,
      }
    },
    {
      name: 'Golden Mountain',
      id: 'goldenMountain',
      images: {
        insideImage: goldenMountainImage,
        plansImage: goldenMountainPlans,
      },
      data: {
        bedrooms: 2,
        bathrooms: 3,
        mts: 160,
        price: 180000,
      }
    },
    {
      name: 'Lion',
      id: 'lion',
      images: {
        insideImage: lionImage,
        plansImage: lionPlans,
      },
      data: {
        bedrooms: 2,
        bathrooms: 1,
        mts: 100,
        price: 90000,
      }
    }
  ]
  return (
    <div className="Projects">
      <Header />

      <section className='banner section'>

        <span className='banner__border'></span>
        <span className='banner__border'></span>
        
        <a href='#lux' className='banner__item lux'>
          <h2 className='banner__text'>Lux</h2>
        </a>

        <a href='#goldenMountain' className='banner__item goldenMountain'>
          <h2 className='banner__text'>Golden Mountain</h2>
        </a>

        <a href='#lion' className='banner__item lion'>
          <h2 className='banner__text'>Lion</h2>
        </a>
      </section>

      {projects.map(project => (
        <ProjectSection project={project} key={project.id} />
      ))}

      <Footer />
    </div>
  )
}

export default Projects