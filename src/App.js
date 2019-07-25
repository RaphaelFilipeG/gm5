import React from 'react';
import './App.scss';
import Header from './components/navbar/Header.js';
import Capa from './components/Capa/Capa.js';
import Card from './components/Card/ServicesList.js';
import QuemSomos from './components/quemsomos/quemsomos.js';
import Links from './components/Links/Links.js';
import Footer from './components/Footer/Footer.js'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
    <Col>
      <Row xl={12}><Header/></Row>
      <Row xl={12}><Capa/></Row>
      <Row xl={12}><QuemSomos/></Row>
      <Row xl={6}><Card/></Row>
      <Row xl={6}><Links/></Row>
       <Row xl={12}><Footer/></Row>   
    </Col>
    </div>
  );
}

export default App;
