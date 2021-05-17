import {Navbar, Nav} from 'react-bootstrap'

const SiteNavbar = () => {

    return (
        <>
        <Navbar className="navbar" bg="dark" variant="dark">

          <Navbar.Brand href="">Final Project</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/vehicle-search">Vehicle Search</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Navbar>      
        </>
    )
}

export default SiteNavbar