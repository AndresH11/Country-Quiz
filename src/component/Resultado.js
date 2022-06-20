import React  from "react";
import "../styles/Resultado.css";

const Resultado = ({ puntuacion, restaurarJuego }) => {
  return (
    <>
      <span className="icono__resultado"></span>
      <h1 className="texto__resultado">Results</h1>
      <p className="puntuacion__resultado">you got <b>{ `${ puntuacion }` }</b> correct answers</p>
      <button type="button" className="button__Resultato" onClick={ restaurarJuego } >
        Try again
      </button>
    </>
  );
};

export default Resultado;
