import training from './data'
import TrainingCard from './TrainingCard'
import './Training.css'

const Training = () => {
  return (
    <section id="training"><h2>Certifications</h2>
    <p>Click on the headings below for details of related certifications I have completed.</p>
    <div className="container training__container">
      {
        training.map(training => (
          <TrainingCard key={training.id}/>

        ))
      }

    </div>
    </section>
  )
}

export default Training