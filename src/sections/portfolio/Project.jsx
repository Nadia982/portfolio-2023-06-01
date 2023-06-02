import Card from '../../components/Card'

const Project = ({project}) => {
  return (
    <Card className="portfolio__project">
      <h4>{project.title}</h4>
      <div className="portfolio__project-cta">
            <a href={project.demo} className="btn sm primary" target="_blank" rel="noopener noreferrer">Demo</a>
            <a href={project.github} className="btn sm secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <div className="portfolio__project-image">
            <img src={project.image} alt={project.title} />
        </div>
        
        <p>{project.desc}</p>
        
    </Card>
  )
}

export default Project
