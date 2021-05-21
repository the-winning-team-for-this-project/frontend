import { useHistory } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const NameCard = ({match}) => {

    const history = useHistory()

    const takeMeToYourLeader = () => {
        history.push(/details/ + match.bankAccountId) 
    }

    return (
        <div>
            <Card tag="a" onClick={takeMeToYourLeader} border="light" style={{ width: '20rem', cursor: 'pointer' }}>
                <Card.Header><h2>{match.forename} {match.surname}</h2></Card.Header>
                <Card.Body>
                    <Card.Title>Date of Birth: {match.dateOfBirth} </Card.Title>
                </Card.Body>
            </Card>

        </div>
    )
}

export default NameCard