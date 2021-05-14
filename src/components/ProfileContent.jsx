import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'

const ProfileContent = ({ profileData }) => {

    console.log(profileData)
    
    return (
        <div>
            <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Vehicle Information
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                <p>{profileData[0].vehicleRegistrationNo}</p>
                <p>{profileData[0].make}</p>
                <p>{profileData[0].model}</p>
                <p>{profileData[0].colour}</p>
                <p>{profileData[0].registrationDate}</p>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Suspect Information
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body>     
                    <p>{profileData[0].forenames}</p>
                    <p>{profileData[0].surname}</p>
                    <p>{profileData[0].address}</p>
                    <p>{profileData[0].dateOfBirth}</p>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    ANPR Information
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                <Card.Body>     
                    <p>location data here</p>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>

        </div>
    )
}

export default ProfileContent