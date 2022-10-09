import React from "react";
import "../styles/Preguntas.css";

const Preguntas = ({ pregunta,linkSrc }) => {

  //SELECCIONANDO LA CLASE QUE TENDRÁ LA ETIQUETA FIGURE
  var classe;
  
  if(linkSrc){
    classe = 'contenedor__pregunta-bandera-activo';
    var alt = 'Bandera';
  }else{
    classe = 'contenedor__pregunta-bandera-inactivo';
  };
  //**********************//
  return (
    <div className="contenedor__pregunta">
      <figure className={ classe }>
        <img src={ linkSrc } alt={ alt } />
      </figure>
      <p className="pregunta">{pregunta}</p>
    </div>
  );
};

export default Preguntas;
