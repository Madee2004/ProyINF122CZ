import React, { Fragment } from 'react'
import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import colegio from '../assets/colegio.png';
import '../cositas/Estilos.css';
export const NavBar = () => {
  return (    
    <>    
    <Navbar className="navBg" variant="dark" expand="lg">
     <Container>
         <Navbar.Brand as={Link} to="/" ><img className='imgnav' src={colegio} alt="..."/></Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="me-auto">
             <Nav.Link as={Link} to="/" >Inicio</Nav.Link>
             <Nav.Link as={Link} to="/Colegio">Colegio</Nav.Link>
             <Nav.Link as={Link} to="/Historia">Historia</Nav.Link>
             <Nav.Link as={Link} to="/Infraestructura">Infraestructura</Nav.Link>
             <Nav.Link as={Link} to="/Uniforme">Unifome</Nav.Link>
             <Nav.Link as={Link} to="/Admisiones">Admisiones</Nav.Link>
             <Nav.Link as={Link} to="/Eventos">Desfile 6 de Agosto</Nav.Link>
             <Nav.Link as={Link} to="/ProgramasA">Programas Académicos</Nav.Link>
             <Nav.Link as={Link} to="/Nochetalentos">Noche de Talentos</Nav.Link>
             <Nav.Link as={Link} to="/Contacto">Contacto</Nav.Link>
             <Nav.Link as={Link} to="/Cred">Créditos</Nav.Link>
         </Nav>
         </Navbar.Collapse>
     </Container>
     </Navbar>  

     <section>
         <Outlet></Outlet>
     </section> 
    </> 
  )
}
