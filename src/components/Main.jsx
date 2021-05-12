import React from 'react'
import Nav from './Navbar'
import RegMatches from './RegMatches'
import Container from 'react-bootstrap/Container'
import {BrowserRouter as Router, Route} from 'react-router-dom'


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
          <RegMatches/>
        </Route>
        </Router>
        </Container>
        </>
    )
}

export default Main
