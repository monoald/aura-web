import '@styles/ProjectSection.css'
import { Link } from 'react-router-dom'

const ProjectSection = ({ project }) => {
  return (
    <section className='ProjectSection'  id={project.id}>
      <div className='details'>

        <h3 className='details__name'>
          {project.name}
        </h3>

        <div className='details__list'>
          <ul className='details__column'>
            <li>
              <span className='details__data'>
              { project.data.bedrooms } Bedrooms
              </span>
            </li>

            <li>
              <span className='details__data'>
              { project.data.bathrooms } Bathrooms
              </span>
            </li>
          </ul>

          <ul className='details__column'>
            <li>
              <span className='details__data'>
                { project.data.mts } mts<sup>2</sup>
              </span>
            </li>

            <li>
              <span className='details__data'>
              { project.data.price } $
              </span>
            </li>
          </ul>
        </div>
      </div>

      <figure className={`ProjectSection__image ${project.id}__image`}>
        <img src={project.images.insideImage} alt="Apartment Sight" loading='lazy' width={380} height={254}/>
        <Link to='/contact' className='button-container'>
          <button className='button'>Request Tour</button>
        </Link>
      </figure>

      <figure className={`ProjectSection__plans ${project.id}__plans`}>
        <img src={project.images.plansImage} alt="Apartment Plans" loading='lazy' width={251} height={180} />
      </figure>
      
    </section>
  )
}

export default ProjectSection