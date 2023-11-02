import React from 'react';
import {Container, Navbar, Nav, NavDropdown} from "react-bootstrap";

function Header(props) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">ProShop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/cart"><i className="fas fa-shopping-cart m-1"></i>Cart</Nav.Link>
                        <Nav.Link href="/login"><i className="fas fa-user m-1"></i>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;