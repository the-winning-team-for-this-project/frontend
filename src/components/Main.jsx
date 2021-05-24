import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import FetchBankDeets from './FetchBankDeets'
import NotFoundPage from './NotFoundPage'
import FetchProfile from './FetchProfile'
import NameSearch from './NameSearch'
import RegSearch from './RegSearch'
import SiteNavbar from './Navbar'
import Homepage from './Homepage'
import MapView from './MapView'


const Main = () => {
    return (  
        <>
        <SiteNavbar />
        <Container>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Homepage/> 
                    </Route>
                    <Route path="/vehicle-search">
                        <RegSearch/>
                    </Route>
                    <Route path="/name-search">
                        <NameSearch/>
                    </Route>
                    <Route path="/get-person/:reg">
                        <FetchProfile/>
                    </Route>
                    <Route path="/details/:bId">
                        <FetchBankDeets/>
                    </Route>
                    <Route path="/map-view/:reg">
                        <MapView/>
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
