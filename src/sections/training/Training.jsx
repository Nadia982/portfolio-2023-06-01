import training from "./data";
import TrainingCard from "./TrainingCard";
import "./Training.css";

const Training = () => {
  return (
    <section id="training">
      <h2>Training</h2>
      <p>
        Click on the headings below for details of training I have
        completed in each technology.
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