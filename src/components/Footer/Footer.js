import React from 'react';
import '../../App.scss';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Footer() {

  return (
    <Container id="Contatos" fixed="botton" className="Footer" >
      <Navbar   bg="light" variant="light" className="App-header">
         <Col>
           <Row className="titulorosa">Endereço</Row>
           <Row className="conteudofooter">nullam lacinia justo sit amet quam porta tempor.</Row>
           <Row className="titulorosa">Contato</Row>
           <Row className="conteudofooter">contato@gm5.com.br</Row>
           <Row className="titulorosa">Redes sociais</Row>
           <Row >
             <Col xs={{order:1}}><i className="fa fa-facebook"/> <i className="fa fa-instagram"/> <i className="fa fa-twitter"/> <i className="fa fa-linkedin"/></Col>
           </Row>
           <Row className="copyright">Copyright 2019 - gm5 tecnologia</Row>
         </Col>
      </Navbar>
    </Container>
  );
}

export default Footer;
