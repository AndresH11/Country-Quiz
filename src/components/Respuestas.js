import React from "react";
import "../styles/Respuestas.css";

const Respuestas = ({ opcion, respuesta }) => {

  return (
    <>
      <p className='TextoOpciones'>{opcion}</p>
      <p className='TextoRespuesta'>{respuesta}</p>
      <i className='bx' />
    </>
  );
};

export default Respuestas;
