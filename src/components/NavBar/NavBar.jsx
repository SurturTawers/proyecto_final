import React from "react";
import CartWidget from "./CartWidget/CartWidget";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import {Link} from "react-router-dom"
function NavBar(){

    return (
        <header className="App-header">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/" >
                        <img style={{borderRadius:"50%", width:40, marginRight:10}} src="/surtStoreLogo.jfif"></img>
                        Surt Store
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link style={{textDecoration: 'none', color: "black", marginRight: "10px"}} to="/category/electronica" >Electrónica</Link>
                            <Link style={{textDecoration: 'none', color: "black", marginRight: "10px"}} to="/category/hogar" >Hogar</Link>
                            <Link style={{textDecoration: 'none', color: "black"}} to="/category/musica" >Música</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <CartWidget/>
            </Navbar>
        </header>
    );
}

export default NavBar;