import React from 'react'
import SiteNavbar from './Navbar'
import Container from 'react-bootstrap/Container'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import FetchProfile from './FetchProfile'
import RegSearch from './RegSearch'


const Main = () => {
    return (
        
        <>
        <SiteNavbar />

        <Container>
            <Router>
                <Route path="/vehicle-search">
                    <RegSearch/>
                </Route>
                <Route path="/getSuspect/:reg">
                    <FetchProfile/>
                </Route>
            </Router>
        </Container>
        </>
    )
}

export default Main;
