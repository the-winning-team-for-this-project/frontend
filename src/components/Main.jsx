import React, { useEffect } from 'react'
import Nav from './Navbar'
import Container from 'react-bootstrap/Container'
import Profile from './Profile'
import ProfileContent from './ProfileContent'


const Main = () => {



    return (
        
        <>
        <Nav />
        <Container></Container>
        <h1>First Name, Last Name</h1>
        <ProfileContent/>
        <Profile/>
        </>
    )
}

export default Main;
