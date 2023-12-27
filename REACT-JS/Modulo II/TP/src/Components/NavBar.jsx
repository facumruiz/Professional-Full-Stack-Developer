import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar collapseOnSelect>

      <Navbar.Collapse id="navbarScroll">
      <Navbar.Brand >Navbar</Navbar.Brand>
        <Nav style={{fontSize:12}}>
          <NavLink eventKey="1" as={Link} to="/">
            Home
          </NavLink>
          <NavLink eventKey="2" as={Link} to="/alta">
            Registro
          </NavLink>
          <NavLink eventKey="3" as={Link} to="/ingresar">
            Login
          </NavLink>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
}

export default NavBar;
