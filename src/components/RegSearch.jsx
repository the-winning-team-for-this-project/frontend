import React from 'react'
import { useState } from 'react'
import { useHistory } from "react-router-dom";
import { Form, Button } from 'react-bootstrap'

const RegSearch = () => {

    const [regSearch, setRegSearch] = useState("")
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        setRegSearch(e.target.value) 
    }

    const handleClick = (e) => {
        history.push("/getSuspect/" + regSearch)
    }

    return (
        <>
        <h1>Vehicle Search</h1>
        <p>
          Search for a vehicle using a registration plate.
        </p>
        <Form>
            <Form.Group>
                <Form.Control required size="lg" type="text" placeholder="Enter a registration with correct spaces here eg. AA11 1AA" value={regSearch} onChange={(e)=>handleSubmit(e)}/>
            </Form.Group>
            <Button type="submit" onClick={handleClick}>Submit</Button>
        </Form>         
        </>
    )
}

export default RegSearch
