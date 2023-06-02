import Card from '../../components/Card'
import data from './data'
import './Skills.css'

const Skills = () => {
  return (
    <section id="skills">
      {/* <h2>Skills</h2>
      <p>I have skills in:</p> */}
      <div className="container skills__container">
        {
          data.map(item=> (
            <Card key={item.id} className="skill light">
              <div className="skill__icon">{item.icon}</div>
              <p>{item.title}</p>
            </Card>

          ) )
        }

      </div>
    </section>
  )
}

export default Skills