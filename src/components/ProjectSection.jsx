import '@styles/ProjectSection.css'

const ProjectSection = ({ project }) => {
  return (
    <section className='ProjectSection'  id={project.id}>
      <div className='details'>

        <h3 className='details__name'>
          {project.name}
        </h3>

        <ul className='details__list'>
          <div className='details__column'>
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
          </div>

          <div className='details__column'>
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
          </div>
        </ul>
      </div>

      <figure className={`ProjectSection__image ${project.id}__image`}>
        <img src={project.images.insideImage} />
      </figure>

      <figure className={`ProjectSection__plans ${project.id}__plans`}>
        <img src={project.images.plansImage} />
      </figure>
      
    </section>
  )
}

export default ProjectSection