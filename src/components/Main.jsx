import React from 'react'
import Nav from './Navbar'
import Container from 'react-bootstrap/Container'
import FetchProfile from './FetchProfile'


const Main = () => {
    return (
        
        <>
        <Nav />
        <Container>

        <FetchProfile/>
        </Container>
        </>
    )
}

export default Main;
