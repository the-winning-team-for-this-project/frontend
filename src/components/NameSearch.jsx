import { Form, Button, Jumbotron, Col } from 'react-bootstrap'


const NameSearch = (props) => {
    
    const handleSNSubmit = (e) => {
        e.preventDefault()
    }

    const handleFNSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
        <Jumbotron>
        <h1>Person Search</h1>
        <p>
          Search for a person's name.
        </p>
        <Form>
            <Form.Row>
                <Col>
                    <Form.Control required size="lg" type="text" placeholder="Enter forename here" value={props.forename} onChange={(e)=>handleFNSubmit(e)}/>
                </Col>
                <Col>               
                    <Form.Control required size="lg" type="text" placeholder="Enter surname here" value={props.surname} onChange={(e)=>handleSNSubmit(e)}/>
                </Col>
            </Form.Row>
            <Button type="button" onClick={props.handleClick}>Submit</Button>
        </Form>  
        </Jumbotron>       
        </>
    )
}

export default NameSearch