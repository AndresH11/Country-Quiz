import React from 'react';
import '../styles/ContenedorRespuestas.css';

const ContenedorRespuestas = ( { children, onClick, id}) => {
  return(
    <div 
     className= {`contenedor__respuestas ` }
     onClick={ ()=>onClick(children,id) }
     id = {id} >

      { children }
      
    </div>
  );
};

export default ContenedorRespuestas;