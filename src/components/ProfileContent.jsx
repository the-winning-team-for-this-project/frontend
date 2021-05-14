import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'

const ProfileContent = ({ profileData }) => {

    console.log(profileData)
    return (
        <div>

            <p>{profileData.surname}</p>

            <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Vehicle Information
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>insert veh info here</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Suspect Information
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body>data.forename</Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>

        </div>
    )
}

export default ProfileContent