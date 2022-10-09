import React from 'react';
import Preguntas from "./Preguntas";
import ContenedorRespuestas from '../containers/ContenedorRespuestas';
import Respuestas from "./Respuestas";
import ButtonNext from './ButtonNext';
import { countryRamdom } from './Quiz';
import { useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit';

const PreguntasYRespuestas = ({ validacionRespuesta, nextQuestion, iconoChechOX }) => {

  const quizState = useSelector(state => state.quizCountry);
  let idDinamico = '1'; //CREAMOS UNA VARIABLE PARA AGREGAR UN id DIFERENTE POR CADA ITERACION SOBRE EL ELEMENTO ContenedorRespuestas
  let posicionAleatoria = ['1', '2', '3', '4'];
  let indice = 0;
  let letras = ['1', '2', '3', '4'];

  //RESPUESTAS ALEATORIAS
  var numeros = [];
  var bandera = true;
  while (bandera) {
    //AGREGAMMOS NUMEROS ALEATORIOS DEL 1 A 4 AL ARRAY
    for (let i = 0; i < 10; i++) {
      numeros.push(countryRamdom(0, 4));
    }
    numeros = [...new Set(numeros)]; //QUITAMOS NUMEROS REPETIDOS
    //VERIFICAMOS QUE HAYA 4 ELEMENTOS EN EL ARRAY
    if (numeros.length === 4) {
      bandera = false;
    };
  };

  (quizState.optiones || []).forEach(opcion => {
    posicionAleatoria[numeros[indice++]] = Object.values(opcion); // respuestas
    letras[indice] = Object.keys(opcion); //letras A,B,C,D
  });

  indice = 1;

  return (
    <>
      <span className="image__countryQuiz"></span>

      <Preguntas pregunta={quizState.question} linkSrc={quizState.flag} />

      {posicionAleatoria.map(opcion => (

        <ContenedorRespuestas onClick={validacionRespuesta} id={idDinamico++} key={nanoid()} >
          <Respuestas opcion={letras[indice++]} respuesta={Object.values(opcion)} icono={iconoChechOX} />
        </ContenedorRespuestas>
      ))}
      <ButtonNext onClick={nextQuestion} />
    </>
  );
};

export default PreguntasYRespuestas;