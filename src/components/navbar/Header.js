import React from 'react';
import logo from './logo.svg';
import '../../App.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';






function Header() {

  return (
    <Container fixed="top"  className="App justify-content-end" >
      <Navbar collapseOnSelect expand="xl"className="App-header ">
         <Navbar.Brand href="index"><img id="Home" src={logo} className="App-logo" alt="GM5"/></Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
         <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
           <Nav className="justify-content-end ">
           <Navbar.Toggle className="icone"><i className="material-icons">clear</i></Navbar.Toggle>
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#QuemSomos">Quem Somos</Nav.Link>
              <Nav.Link href="#NossosServicos">Nossos Serviços</Nav.Link>
              <Nav.Link href="#Contatos">Contatos</Nav.Link>
           </Nav>
         </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Header;
