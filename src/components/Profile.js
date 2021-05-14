import { Accordion, Card, Button } from 'react-bootstrap'
import axios from 'axios'
import {useState, useEffect} from 'react'


const Profile = () => {

const [data,setData]= useState("");

// will change to real api url
const API_URL = "http://localhost:5000/searchSuspect/"

useEffect(() => {
    // will need to change this when backend is done
    axios.get(API_URL + "?vehicleRegistrationNo=FK59 TDY")
      .then(res => {
      const profileJSON = res.data
      console.log(profileJSON);
      setData({profileJSON});
      })
      .catch(err => console.log(err));
    }, []);

  

    return (
    <div> 
      {data.surname}
      <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Vehicle Information
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{{data}}</Card.Body>
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
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="2">
            Location Information
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>data....</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="3">
            .... Information
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body>data....</Card.Body>
        </Accordion.Collapse>
      </Card>
      </Accordion>

    </div>
  );
}


export default Profile