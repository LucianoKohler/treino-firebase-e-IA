import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Header() {
  return (
  <Navbar bg="light">
    <Container>
      <Navbar.Brand as={Link} to="/">Meu App</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Página Inicial</Nav.Link>
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}