import { Form, Button, Col } from 'react-bootstrap'

const NameSearchForm = (props) => {

    return (
        <div>
        <Form>
            <Form.Row>
                <Col>
                    <Form.Control required size="lg" type="text" placeholder="Enter forename here" value={props.forename} onChange={props.handle} id="forename"/>
                </Col>
                <Col>               
                    <Form.Control required size="lg" type="text" placeholder="Enter surname here" value={props.surname} onChange={props.handle} id="surname"/>
                </Col>
            </Form.Row>
            <Button type="button" onClick={props.clickio}> Submit</Button>
        </Form> 
        </div>
    )
}

export default NameSearchForm
