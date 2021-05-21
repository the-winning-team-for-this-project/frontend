import { Card} from 'react-bootstrap'

const NameCard = ({match}) => {

    return (
        <>
        <Card border="info" style={{ width: '18rem' }}>
            <Card.Header>{match.forename} {match.surname}</Card.Header>
            <Card.Body>
                <Card.Title>DOB</Card.Title>
                <Card.Text>
                    {match.dateOfBirth} 
                </Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}

export default NameCard