import { questionResponse } from '../features/quizSlice/quizSlice';

//FUNCION PARA GENERAR NUMEROS ALEATORIOS
export const countryRamdom = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

//ELEMENTO PRINCIPAL
export const Quiz = async (dispatch, state) => {
  try {
    //HACEMOS LA PETICION A LA API
    const data = await (
      await fetch("https://restcountries.com/v3.1/all")
    ).json();

    const indice = countryRamdom(0, 40); //INDICE ALEATORIO
    const nameCountry = data[indice].name.common; //NOOMBRE DEL PAIS
    const languagesCountry = Object.values(data[indice].languages)[0]; //LENGUAJE DEL PAIS
    const flagCountry = data[indice].flags.svg; //BANDERA DEL PAIS
    const regionCountry = data[indice].region; //REGIONs DEL PAIS


    // OBJETOS DE PREGUNTAS Y RESPUESTAS
    const preguntasYRespuestas = [
      {
        pregunta: `Que lenguaje se habla en ${nameCountry}`,
        opciones: [
          { 'A': languagesCountry }, // RESPUESTA CORRECTA
          { 'B': Object.values(data[countryRamdom(11, 20)].languages) },
          { 'C': Object.values(data[countryRamdom(21, 30)].languages) },
          { 'D': Object.values(data[countryRamdom(31, 40)].languages) },
        ],
        respuestaCorrecta: languagesCountry,
      },
      {
        pregunta: `En que región está ${nameCountry}`,
        opciones: [
          { 'A': regionCountry },
          { 'B': `Asia` },
          { 'C': `Américas` },
          { 'D': `Europa` },
        ],
        respuestaCorrecta: regionCountry,
      },
      {
        pregunta: `A que pais pertenece la bandera`,
        opciones: [
          { 'A': nameCountry }, //RESPUSETA CORRECTA
          { 'B': data[countryRamdom(11, 20)].name.common },
          { 'C': data[countryRamdom(21, 30)].name.common },
          { 'D': data[countryRamdom(31, 40)].name.common },
        ],
        flag: `${flagCountry}`,
        respuestaCorrecta: nameCountry,
      },
    ];

    const indicePregunta = countryRamdom(0, 3); //INDICE RANDOM

    console.log(preguntasYRespuestas[indicePregunta]);

    //Cambiamos el estado de questionResponse
    dispatch(questionResponse({
      ...state,
      question: preguntasYRespuestas[indicePregunta].pregunta,
      optiones: preguntasYRespuestas[indicePregunta].opciones,
      response: preguntasYRespuestas[indicePregunta].respuestaCorrecta,
      flag: preguntasYRespuestas[indicePregunta].flag,
    }));
    
  } catch (error) {
    console.log(error);
  }
};

