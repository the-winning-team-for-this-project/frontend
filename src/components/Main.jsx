import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import NotFoundPage from './NotFoundPage'
import FetchProfile from './FetchProfile'
import NameSearch from './NameSearch'
import RegSearch from './RegSearch'
import SiteNavbar from './Navbar'
import MapView from './MapView'


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
                    <Route path="/name-search">
                        <NameSearch/>
                    </Route>
                    <Route path="/getSuspect/:reg">
                        <FetchProfile/>
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
