import React from 'react';
import '../../App.scss';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import QuemImg from './quem-somos.png';
import Container from 'react-bootstrap/Container';

function QuemSomos() {
  return (
   <Container className="QuemSomos">
           
               <CardDeck>
                 <Card className="card">
                 <Card.Img variant="top" src={QuemImg} alt="Quem Somos ?" />
                 <Card.Body>
                 <Card.Title id="QuemSomos">Quem Somos</Card.Title>
                 <Card.Text className="QuemConteudo">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam lacinia justo sit amet quam porta tempor.
                   Etiam eros sem, mollis eget risus eget, viverra gravida orci.
                    Sed non arcu id nulla fringilla ultricies. Ut aliquet convallis cursus.
                     Pellentesque tincidunt, libero ut volutpat gravida, tellus velit porta lacus,
                      vitae pellentesque urna erat ac eros. In quis ante fermentum, ullamcorper velit ut,
                       viverra risus. Cras volutpat justo tellus, in convallis augue sodales at.
                        Cras varius semper metus laoreet aliquet.
                         Orci varius natoque penatibus et magnis dis parturient montes,
                          nascetur ridiculus mus. Phasellus luctus convallis metus.
                           Cras et elit eu diam rutrum iaculis.
                            Morbi malesuada efficitur justo a tincidunt.
                 </Card.Text>
                 </Card.Body>
                  
                </Card>
              </CardDeck>
</Container>

 
      );
}

export default QuemSomos;
