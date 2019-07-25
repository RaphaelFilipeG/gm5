import React from 'react';
import '../../App.scss';
import img from './capa.svg';

var style = {
  width: "100vw",
  height: "25vw",
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundSize: 'cover',
  backgroundRepeat  :'no-repeat',
  backgroundImage: `url(${img})`,

}


function Capa() {

  return (
    <div className="Capa">
      <div style={style}/>
    </div>
  );
}

export default Capa;
