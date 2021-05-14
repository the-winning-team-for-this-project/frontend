import React, { useEffect } from 'react'
import Nav from './Navbar'
import RegSearch from './RegSearch'
import Container from 'react-bootstrap/Container'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Profile from './Profile'
import ProfileContent from './ProfileContent'



const Main = () => {



    return (
        
        <>
        <Nav />

        <Container>

        <Router>
        <Route exact path="/">
          <p>Home</p>
        </Route>
        <Route path="/vehicle-search">
          <RegSearch/>
        </Route>
        </Router>
        <ProfileContent/>
        <Profile/>
        </Container>

        

        </>
    )
}

export default Main;
