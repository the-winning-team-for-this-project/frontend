import {BrowserRouter as Router, Route} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import FetchProfile from './FetchProfile'
import RegSearch from './RegSearch'
import SiteNavbar from './Navbar'
import MapView from './MapView'

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
                    <Route path="/map-view/:reg">
                        <MapView/>
                    </Route>
                </Router>
            </Container>
        </>
    )
}

export default Main;
