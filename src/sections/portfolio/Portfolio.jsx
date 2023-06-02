import './Portfolio.css'
import ProjectCategories from './ProjectCategories'
import Projects from './Projects'
import data from './data'
import { useState } from 'react'

const Portfolio = () => {
  const [projects, setProjects] = useState(data)
  return (
    <section id="portfolio">
      
      <h2><a href="#portfolio" className="section-link">Recent Projects</a></h2>
      <p>Use the buttons to toggle the different categories.</p>
      <div className="container portfolio__container">
        <ProjectCategories/>
        <Projects projects={projects}/>

      </div>
      </section>
  )
}

export default Portfolio