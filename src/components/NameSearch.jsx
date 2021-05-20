import { Form, Button, Jumbotron, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

const NameSearch = () => {

    const [forenameSearch, setForenameSearch] = useState("")
    const [surnameSearch, setSurnameSearch] = useState("")
    const history = useHistory()

    const handleFNSubmit = (e) => {
        e.preventDefault()
        setForenameSearch(e.target.value) 
    }

    const handleSNSubmit = (e) => {
        e.preventDefault()
        setSurnameSearch(e.target.value) 
    }

    const handleClick = () => {
        history.push("/getSuspect/" + forenameSearch + " " + surnameSearch)
    }

    return (
        <>
        <Jumbotron>
        <h1>Person Search</h1>
        <p>
          Search using name of person
        </p>
        <Form>
            <Form.Row>
                <Col>
                    <Form.Control required size="lg" type="text" placeholder="Enter forename here" value={forenameSearch} onChange={(e)=>handleFNSubmit(e)}/>
                </Col>
                <Col>               
                    <Form.Control required size="lg" type="text" placeholder="Enter surname here" value={surnameSearch} onChange={(e)=>handleSNSubmit(e)}/>
                </Col>
            </Form.Row>
            <Button type="button" onClick={handleClick}>Submit</Button>
        </Form>  
        </Jumbotron>       
        </>
    )
}

export default NameSearch