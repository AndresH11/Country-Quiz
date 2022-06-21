import React from "react";
import "../styles/ContenedorCountryQuiz.css";

const ContenedorCountryQuiz = ({ children }) => {
  return (
    <div className="contenedor__countryQuiz">
      <h1 className="titulo__countryQuiz">COUNTRY QUIZ</h1>
      <div className="contenedor__countryQuiz-cuestion">{children}</div>
    </div>
  );
};

export default ContenedorCountryQuiz;
