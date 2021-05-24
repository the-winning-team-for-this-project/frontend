import { Form, Button, Jumbotron } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

//"api_url":"http://3.250.17.215:8080/getSuspect/"
// for json-server: "http://localhost:5000/suspect/?vehicleRegistrationNo="
// test reg = FK59 TDY

const RegSearch = () => {

    const [regSearch, setRegSearch] = useState("")
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        setRegSearch(e.target.value) 
    }

    const handleClick = () => {
        history.push(/get-person/ + regSearch)
    }

    return (
        <>
        <Jumbotron>
        <h1>Vehicle Search</h1>
        <p>
            Search using for a vehicle using a registration plate
        </p>
        <Form>
            <Form.Group>
                <Form.Control required size="lg" type="text" placeholder="Enter a registration with correct spaces here eg. AA11 1AA" value={regSearch} onChange={(e)=>handleSubmit(e)}/>
            </Form.Group>
            <Button type="button" onClick={handleClick}>Submit</Button>
        </Form>  
        </Jumbotron>       
        </>
    )
}

export default RegSearch
