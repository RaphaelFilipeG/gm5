import React from 'react';
import '../../App.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Links() {
  return (
    <Container className="Links">
      <h5 id="Links">Links</h5>
     <Col>
       <Row xs={{ order: 11 }}><div className='box'><span className="linknum">1.</span><span className="linkcontent"> Lorem ipsum dolor sit amet </span></div></Row>
       <Row xs={{ order: 11 }}><div className='box'><span className="linknum">2.</span><span className="linkcontent"> Lorem ipsum dolor sit amet </span></div></Row>
       <Row xs={{ order: 11 }}><div className='box'><span className="linknum">3.</span><span className="linkcontent"> Lorem ipsum dolor sit amet </span></div></Row>

     </Col>
    </Container>
  );
}

export default Links;
