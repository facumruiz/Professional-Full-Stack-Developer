import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavLink, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

function NavBar() {
  return (
    <Navbar
      variant="white"
      className="fixed-top navbar-expand-lg"
      style={{ backgroundColor: "white" }}
    >
      <Navbar.Collapse id="navbarScroll ">
        <Navbar.Brand>
          {" "}
          <img

            width="300"
            src="https://upload.wikimedia.org/wikipedia/commons/4/45/Motorola-logo-black-and-white.png"
            alt=""
          />
        </Navbar.Brand>
        <Nav className="mb-lg-0 ms-auto " style={{ fontSize: 12 }}>
          <NavLink eventKey="1" as={Link} to="/">
            Home
          </NavLink>
          <NavLink eventKey="2" as={Link} to="/alta">
            Registro
          </NavLink>
          <NavLink eventKey="3" as={Link} to="/ingresar">
            Login
          </NavLink>
          <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/productos/alta">
              Alta
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
