import Card from "../../components/Card"


const Certification = ({certification}) => {
  return (
    <Card className="certification-card">
      <small>{certification.skill}</small>
    </Card>
  )
}

export default Certification