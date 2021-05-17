import React from 'react'
import SiteNavbar from './Navbar'
import Container from 'react-bootstrap/Container'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import FetchProfile from './FetchProfile'
import RegSearch from './RegSearch'
import NotFoundPage from './NotFoundPage'


const Main = () => {
    return (
        
        <>
        <SiteNavbar />

        <Container>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <h1>Home</h1>
                    </Route>
                    <Route path="/vehicle-search">
                        <RegSearch/>
                    </Route>
                    <Route path="/getSuspect/:reg">
                        <FetchProfile/>
                    </Route>
                    <Route>
                        <NotFoundPage/>
                    </Route>
                </Switch>
            </Router>
        </Container>
        </>
    )
}

export default Main;
