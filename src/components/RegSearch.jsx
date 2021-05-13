import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'
import RegMatches from './RegMatches'

const RegSearch = () => {

    const [regSearch, setRegSearch] = useState("")
    const [regSearchData, setRegSearchData] = useState([])
    const API_URL = "http://localhost:5000/vehicle?vehicleRegistrationNo="

    const handleSubmit = (e) => {
        console.log(e.target.value)
        setRegSearch(e.target.value)
        console.log(regSearch)
    }

    const submit = (e) => {
        e.preventDefault()
        axios.get(API_URL + regSearch)
        .then(res => {
            setRegSearchData(res.data);
            console.log(res.data)
          })
        .catch(err => console.log(err))
      }

    return (
        <>
        <h1>Vehicle Search</h1>
        <p>
          Search for a vehicle using a registration plate.
        </p>
        <Form onSubmit={(e)=> submit(e)}>
            <Form.Group>
                <Form.Control required size="lg" type="text" placeholder="Enter a registration with correct spaces here eg. AA11 1AA" value={regSearch} onChange={(e)=>handleSubmit(e)}/>
            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>
        <p>FK59 TDY</p>

        {regSearchData &&
            <RegMatches vehData={regSearchData} />
        }
            

        </>
    )
}

export default RegSearch
