import { Container } from 'react-bootstrap'

const Homepage = () => {
    return (
        <Container className='homecontainer'>
        <h1><strong>Search for Person Information</strong></h1>
        <br />
        <h3>
                Direct to search using the Navigation Bar at the top of this page. 
            <br />
            <br />
            Input known information.
            <br />
            <br />
            You will then be redirected to a page containing further information on that person.
            
        </h3>
        </Container>
        
    )
}

export default Homepage