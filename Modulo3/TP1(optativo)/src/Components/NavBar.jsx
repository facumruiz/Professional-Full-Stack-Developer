import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import React, {useState,useEffect} from "react"

function NavBar() {
  const [texto, setTexto] = useState();

  const inputChange = ({target}) => {
    setTexto(target.value)
    
  }
  console.log(texto)
  return (
    <Navbar className="p-3">
      <Navbar.Collapse id="navbarScroll" >
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Nav className="ms-auto" style={{ fontSize: 12 }}  >
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
