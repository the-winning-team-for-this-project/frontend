import { useHistory } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const NameCard = ({match}) => {

    const history = useHistory()

    const takeMeToYourLeader = () => {
        history.push(/getSuspect/ + match.id) 
    }

    return (
        <div>
            <Card tag="a" onClick={takeMeToYourLeader} border="light" style={{ width: '18rem', cursor: 'pointer' }}>
                <Card.Header><h2>{match.forename} {match.surname}</h2></Card.Header>
                <Card.Body>
                    <Card.Title>Date of Birth: {match.dateOfBirth} </Card.Title>
                </Card.Body>
            </Card>

        </div>
    )
}

export default NameCard