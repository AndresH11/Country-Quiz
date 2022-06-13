import React from "react";
import "./Respuestas.css";

const Respuestas = ({ opcion, respuesta }) => {
  return (
    <div className="contenedor__respuestas">
      <p className="opciones">{opcion}</p>
      <p>{respuesta}</p>
      <i className="bx bx-x-circle icono-correcto" />
    </div>
  );
};

export default Respuestas;
