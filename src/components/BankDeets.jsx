import { Accordion, Card, ListGroup, Table, Button } from 'react-bootstrap'
import LocationTableData from './LocationTableData'
import BankCardData from './BankCardData'
import EPOSData from './EPOSData'
import ATMData from './ATMData'

const BankDeets = ({ profileData, buttonClick }) => {

    const bankCards = profileData.bankCards.map((card, index) => {
        return (<BankCardData key={index} card={card} />)})

    const ATMTrans = profileData.atmTransactions.map((atm, index) => {
        return (<ATMData key={index} atm={atm} />)})

        const EPOSTrans = profileData.eposTransactions.map((epos, index) => {
            return (<EPOSData key={index} epos={epos} />)})

    return (
        <div>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <h3>Person Information</h3>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        <ListGroup>
                                <ListGroup.Item><b>Forename(s):</b> {profileData.suspect.forenames}</ListGroup.Item>
                                <ListGroup.Item><b>Surname:</b> {profileData.suspect.surname}</ListGroup.Item>
                                <ListGroup.Item><b>Address:</b> {profileData.suspect.homeAddress}</ListGroup.Item>
                                <ListGroup.Item><b>Date of Birth:</b> {profileData.suspect.dateOfBirth}</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            <h3>Bank Card Information</h3>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                        <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Card Number</th>
                                        <th>Account Number</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bankCards}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            <h3>EPOS Data</h3>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Amount</th>
                                        <th>Vendor</th>
                                        <th>Location</th>
                                        <th>Timestamp</th>
                                        <th>Payee Account</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {EPOSTrans}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                            <h3>ATM Data</h3>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Amount</th>
                                        <th>Location</th>
                                        <th>Timestamp</th>
                                        <th>Type</th>
                                        <th>Amount(£)</th>
                                        <th>Card Used</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ATMTrans}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}

export default BankDeets
