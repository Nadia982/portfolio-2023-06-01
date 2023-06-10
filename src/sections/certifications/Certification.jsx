import Card from "../../components/Card"


const Certification = ({certification}) => {
  return (
    <div id="certification-card" className="certification-card">
      <small>{certification.skill}</small>
    </div>
  )
}

export default Certification