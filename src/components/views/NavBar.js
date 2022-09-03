import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <Navbar collapseOnSelect bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded">
    <Container>
      <Navbar.Brand href="/">Blog.app</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="justify-content-end flex-grow-1 pe-3">
        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
        <Nav.Link as={NavLink} to="/categories">Categories</Nav.Link>
        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Container>
   </Navbar>
  );
}

export default NavBar;