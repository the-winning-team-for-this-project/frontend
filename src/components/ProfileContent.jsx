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
                            <ListGroup.Item><b>Registration Number:</b> {profileData[0].vehicleRegistrationNo}</ListGroup.Item>
                            <ListGroup.Item><b>Make:</b> {profileData[0].make}</ListGroup.Item>
                            <ListGroup.Item><b>Model:</b> {profileData[0].model}</ListGroup.Item>
                            <ListGroup.Item><b>Colour:</b> {profileData[0].colour}</ListGroup.Item>
                            <ListGroup.Item><b>Registration Date:</b> {profileData[0].registrationDate}</ListGroup.Item>
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
                        <ListGroup.Item><b>Forename(s):</b> {profileData[0].forenames}</ListGroup.Item>
                        <ListGroup.Item><b>Surname: </b>{profileData[0].surname}</ListGroup.Item>
                        <ListGroup.Item><b>Address:</b> {profileData[0].address}</ListGroup.Item>
                        <ListGroup.Item><b>Date of Birth:</b> {profileData[0].dateOfBirth}</ListGroup.Item>
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
                        <ListGroup.Item><b>Registration Number:</b> {profileData[0].vehicleRegistrationNo}</ListGroup.Item>
                        <ListGroup.Item><b>Make:</b> {profileData[0].make}</ListGroup.Item>
                        <ListGroup.Item><b>Model:</b> {profileData[0].model}</ListGroup.Item>
                        <ListGroup.Item><b>Colour:</b> {profileData[0].colour}</ListGroup.Item>
                        <ListGroup.Item><b>Registration Date:</b> {profileData[0].registrationDate}</ListGroup.Item>
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
                        <ListGroup.Item><b>Street Name:</b> {profileData[0].streetName}</ListGroup.Item>
                        <ListGroup.Item><b>Latitude:</b> {profileData[0].latitude}</ListGroup.Item>
                        <ListGroup.Item><b>Longitude:</b> {profileData[0].longitude}</ListGroup.Item>
                        <ListGroup.Item><b>Timestamp:</b> {profileData[0].timestamp}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>

            

        </div>
    )

    
}



export default ProfileContent