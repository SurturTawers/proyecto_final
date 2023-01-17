import React from "react";
import {Link} from "react-router-dom"
import {Nav, Navbar, Container} from 'react-bootstrap'
import CartWidget from "./CartWidget/CartWidget";
import { CATEGORIES } from "../../utils/categories";
function NavBar(){
    return (
        <header className="App-header">
            <Navbar bg="light" expand="false">
                <Container>
                    <div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <span className="px-2"  style={{color:"black", fontSize:"medium" }} >Categorias</span>
                    </div>
                    <Navbar.Brand href="/" >
                        <img style={{borderRadius:"50%", width:40, marginRight:10}} src="/surtStoreLogo.jfif"></img>
                        Surt Store
                    </Navbar.Brand>
                    <CartWidget/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {CATEGORIES.map((categoria) =>{
                                return (
                                    <Link style={{textDecoration: 'none', color: "black", marginRight: "10px"}} to={`/category/${categoria.id}`} >{categoria.nombre}</Link>
                                );
                            })}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default NavBar;