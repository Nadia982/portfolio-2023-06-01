import Card from "../../components/Card"
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

const TrainingCard = ({trainingItem}) => {
  return (
    <Card className="trainingCard">
        <div>
            <h4 className="training-card__question">{trainingItem.title}</h4>
            <button className="training-card__icon">
                <AiOutlinePlus/>
            </button>
            <div id="training-card__course">{trainingItem.courses?.map(course => (
                <div id={course.id}>
                    <p><strong><a className="course-link" href={course.link}>{course.title}</a></strong>. Course length: {course.courseLength}. Completed: {course.dateCompleted}</p>
                </div>
            ))}</div>

        </div>
    </Card>
  )
}

export default TrainingCard