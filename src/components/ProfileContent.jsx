import React from 'react'
import { Accordion, Card, ListGroup } from 'react-bootstrap'


const ProfileContent = ({ profileData }) => {
    console.log(profileData)
    
    return (
        <div>
            <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        <h3>Vehicle Information</h3>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <ListGroup>
                            <ListGroup.Item><b>Registration Number:</b> {profileData.vehicleRegistrationNo}</ListGroup.Item>
                            <ListGroup.Item><b>Make:</b> {profileData.make}</ListGroup.Item>
                            <ListGroup.Item><b>Model:</b> {profileData.model}</ListGroup.Item>
                            <ListGroup.Item><b>Colour:</b> {profileData.colour}</ListGroup.Item>
                            <ListGroup.Item><b>Registration Date:</b> {profileData.registrationDate}</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        <h3>Suspect Information</h3>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>    
                    <ListGroup>
                        <ListGroup.Item><b>Forename(s):</b> {profileData.forenames}</ListGroup.Item>
                        <ListGroup.Item><b>Surname: </b>{profileData.surname}</ListGroup.Item>
                        <ListGroup.Item><b>Address:</b> {profileData.address}</ListGroup.Item>
                        <ListGroup.Item><b>Date of Birth:</b> {profileData.dateOfBirth}</ListGroup.Item>
                    </ListGroup> 
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                    <h3>ANPR Information</h3>
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                <Card.Body>     
                    <ListGroup>
                        <ListGroup.Item><b>Registration Number:</b> {profileData.vehicleRegistrationNo}</ListGroup.Item>
                        <ListGroup.Item><b>Make:</b> {profileData.make}</ListGroup.Item>
                        <ListGroup.Item><b>Model:</b> {profileData.model}</ListGroup.Item>
                        <ListGroup.Item><b>Colour:</b> {profileData.colour}</ListGroup.Item>
                        <ListGroup.Item><b>Registration Date:</b> {profileData.registrationDate}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                    <h3>Location Data</h3>
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                <Card.Body>     
                    <ListGroup>
                        <ListGroup.Item><b>Street Name:</b> {profileData.locations[0].streetName}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>

            

        </div>
    )

    
}



export default ProfileContent