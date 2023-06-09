import data from './data'
import Card from '../../components/Card'
import './About.css'

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <h2><a href="#about" className="section-link">About Me</a></h2>
        <div className="about__cards">
          {
            data.map(item => (
              <Card key={item.id} className="about__card" >
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>

              </Card>
            ))
          }
        </div>
        {/* <div className="about__left"> */}
        <p>I have worked in the tech space for the past 11 years, most recently as a senior paralegal at a global IT services company headquartered in London. However, my real passion and new professional focus is <strong>frontend web development</strong>.</p>
        {/* </div>
        <div className="about__right"> */}
          <p>I am an avid learner and am keen to learn as much as possible about new and existing technologies while making websites and applications that delight and engage users.</p>
        {/* </div> */}

      </div>
    </section>
  )
}

export default About