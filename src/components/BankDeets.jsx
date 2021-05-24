import React from 'react'

const BankDeets = () => {

    const locationData = profileData.locations.map((location, index) => {
        return (
            <LocationTableData
                key={index}
                location={location} />
        )
    })

    
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
                            <h3>Location Data</h3>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Time</th>
                                        <th>Location</th>
                                        <th>Latitude</th>
                                        <th>Longitude</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {locationData}
                                </tbody>
                            </Table>
                            <Button variant="primary" size="lg" block onClick={buttonClick}>View on a map</Button>{' '}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}

export default BankDeets
