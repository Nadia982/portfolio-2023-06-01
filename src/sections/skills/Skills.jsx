import Card from '../../components/Card'
import data from './data'
import './Skills.css'

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      {/* <p>I have skills in:</p> */}
      
      <div className="container skills__container">
      <p>Click on the icons below to see my <strong>skills and experience</strong> in:</p>
      <div className="container skills__grid-container"> {
          data.map(item=> (
            <Card key={item.id} className="skill light">
              <div className="skill__card">
              <div className="skill__icon">{item.icon}</div>
              <small>{item.title}</small>
              </div>
            </Card>
          ) )
        }
</div>
      </div>
    </section>
  )
}

export default Skills