import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
function Menu({ data, loginProp }) {
    const [login, setLogin] = useState((localStorage.getItem("token") ? true : false))
    const logout = () => {
        loginProp(false);
        setLogin(false)
        localStorage.removeItem("token")
    }
    /*useEffect(
        ()=>{

        },
        [localStorage.removeItem("token")]
    )*/
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {data.map(opcion => <Nav.Link as={Link} to={opcion.path}>{opcion.label}</Nav.Link>)}
                    {
                        login &&
                        <>
                            <Nav.Link onClick={logout}>Salir</Nav.Link>
                            <Nav.Link as={Link} to={"/agregarProductos"}>Agregar Producto</Nav.Link>
                        </>
                    }
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>


    )
}

export default Menu