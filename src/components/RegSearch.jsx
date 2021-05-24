import { Form, Button, Jumbotron } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

//"api_url":"http://3.250.17.215:8080/getSuspect/"
// for json-server: "http://localhost:5000/suspect/?vehicleRegistrationNo="
// test reg = ABCD 1AB

const RegSearch = () => {

    const [regSearch, setRegSearch] = useState("")
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        setRegSearch(e.target.value) 
    }

    
    const handleClick = () => {
        history.push(/getSuspect/ + regSearch)
    }

    return (
        <>
        <Jumbotron>
        <h1>Vehicle Search</h1>
        <p>
            Search using vehicle registration plate
        </p>
        <Form>
            <Form.Group>
                <Form.Control required size="lg" type="text" placeholder="Enter a registration with correct spaces here eg. AA11 1AA" value={regSearch} onChange={(e)=>handleSubmit(e)}/>
            </Form.Group>
            <Button type="submit" onClick={handleClick}>Submit</Button>
        </Form>  
        </Jumbotron>       
        </>
    )
}

export default RegSearch
