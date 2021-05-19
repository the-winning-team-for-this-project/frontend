import React from 'react'
import { Container } from 'react-bootstrap'

const Homepage = () => {
    return (
        <Container className='homecontainer'>
        <h1><strong>Search for Suspect Information</strong></h1>
        <br />
        <h2>Direct to search using the Navigation Bar at the top of this page. 
            Input known suspect information.
            <br />
            You will then be redirected to a page containing further information on that Suspect.
        </h2>
        </Container>
        
    )
}

export default Homepage