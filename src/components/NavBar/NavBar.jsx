import React from "react";
import CartWidget from "./CartWidget/CartWidget";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
function NavBar(){

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img style={{borderRadius:"50%", width:40, marginRight:10}} src="/surtStoreLogo.jfif"></img>
                    Surt Store
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#Electrónica" >Electrónica</Nav.Link>
                        <Nav.Link href="#Hogar">Hogar</Nav.Link>
                        <Nav.Link href="#Música">Música</Nav.Link>
                        <Nav.Link href="#Juguetes">Juguetes</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <CartWidget/>
        </Navbar>
    );
}

export default NavBar;