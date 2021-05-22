import { Form, Button, Col} from 'react-bootstrap'
import { useState } from 'react'

const TimeMapForm = () => {
    const [dateSearch, setDateSearch] = useState("")
    const [timeSearch, setTimeSearch] = useState("")

    const handleDateSubmit = (e) => {
        e.preventDefault()
        setDateSearch(e.target.value) 
    }
    const handleTimeSubmit = (e) => {
        e.preventDefault()
        setTimeSearch(e.target.value) 
    }

    const handleClick = (e) => {
        e.preventDefault()
        console.log(dateSearch +" at " + timeSearch)
    }
    
    return (
        <div>
        <Form>
            <Form.Row className="align-items-center">
            <Col xs="auto">
                <Form.Control required type="date" value={dateSearch} onChange={(e)=>handleDateSubmit(e)}/>
            </Col>
            <Col xs="auto">
                <Form.Control type="time" value={timeSearch} onChange={(e)=>handleTimeSubmit(e)}/>
            </Col>
            <Col xs="auto">
            <Button type="submit" onClick={handleClick}>Submit</Button>
            </Col>
            </Form.Row>
        </Form>
        </div>
    )
}

export default TimeMapForm
