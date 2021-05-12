import React from 'react'
import Nav from './Navbar'
import Container from 'react-bootstrap/Container'
import Profile from './Profile'
import ProfileContent from './ProfileContent'


const Main = () => {
    return (
        <>
        <Nav />
        <Container></Container>
        <ProfileContent/>
        <Profile/>
        </>
    )
}

export default Main;
