import training from "./data";
import TrainingCard from "./TrainingCard";
import "./Training.css";

const Training = () => {
  return (
    <section id="training">
      {/* <h2>Training</h2> */}
      <p id="skills-all">
        Click on the headings below for details of certifications I have
        obtained in each of these technologies.
      </p>
      <div className="container training__container">
        {training.map(trainingItem => (
          <TrainingCard key={trainingItem.id} trainingItem={trainingItem} />
        ))}
      </div>
    </section>
  );
};

export default Training;