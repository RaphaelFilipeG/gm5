import React from 'react';
import '../../App.scss';
import Servico from './servico';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

function ServicesList() {

  return (
   <div className="serviceList">
     <h5 id="NossosServicos">Nossos Serviços</h5>
     <CardDeck xl={4} >
           {Servico.Servico.map((servicoDetail,)=>{
            const path = "./"+servicoDetail.Imagem;

            var style2 = {
              width: "15vmin",
              height: "15vmin",
              textAlign: "center",
              alignContent: "center",
              flexDirection: "column",
              textAlign: "center",
              alignItems: 'center',
              alignSelf: 'center',
              backgroundColor: '#232323',
              backgroundPosition: 'center',
              backgroundRepeat  :'no-repeat',
              backgroundImage: `url(${path})`,
            
            }
          console.log(servicoDetail.Imagem)
               return <div key={servicoDetail.Posicao}>
               
                 <Card className="card-size">
                   
                 <Card.Img variant="top" style={style2} alt={servicoDetail.Imagem} />
                 <Card.Body>
                 <Card.Title className="servicotitulo">{servicoDetail.Titulo}</Card.Title>
                 <Card.Subtitle className="mb-2 text-muted">{servicoDetail.Subtitulo}</Card.Subtitle>
                 <Card.Text className="sevicoconteudo">
                   This is a wider card with supporting text below as a natural lead-in to
                   additional content. This content is a little bit longer.
                 </Card.Text>
                 </Card.Body>
                  
                </Card>
              

              
</div>

           })}
  </CardDeck>
    </div>
      );
}

export default ServicesList;
