import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

export function Navbar() {
  return(
  <>
    <NavbarBs className="bg-white shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link to="/" as={NavLink}>
            홈
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            스토어
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            어바웃
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  </>
  )
}