import { Accordion, Card, Button } from 'react-bootstrap'
import axios from 'axios'
 

  const searchProfiles = (e) => {
    axios.get(`http://localhost:5000/vehicle`)
    .then(response => {
      console.log(response.data);
    });
  };



  const Profile = () => {
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
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
      </Accordion>

    </div>
  );
}

export default Profile