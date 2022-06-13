import { useState,useEffect } from 'react';
import './App.css';
import Preguntas from './Preguntas';
import Respuestas from './Respuestas';
import { Quiz, countryRamdom } from './Quiz';

function App() {

  //OBTENEMOS LAS PREGUNTAS Y RESPUESTAS DEL QUIZ
  // preRe = preguntas y respuetas
  const [preRe , setPreRe] = useState(' ');

  useEffect(()=>{
    Quiz(setPreRe);
  },[]);

  var opcion;
  useEffect(()=>{
    setTimeout(() => {
      console.log(preRe.respuestas.flat(1)[0]);
      opcion = preRe.respuestas.flat(1)[0];
    }, 1000);
  },[preRe]);

  //RESPUESTAS ALEATORIAS
  var numeros = [];
  var bandera = true;

  
  while(bandera){
  
    //AGREGAMMOS NUMEROS ALEATORIOS DEL 1 A 4 AL ARRAY
    for(let i=0; i<10; i++){
      numeros.push(countryRamdom(0,4));
    };

    numeros = [...new Set(numeros)] //QUITAMOS NUMEROS REPETIDOS

    //VERIFICAMOS QUE HAYA 4 ELEMENTOS EN EL ARRAY
    if(numeros.length === 4){
      bandera = false;
    }
  };

  return (
    <div className="App">
      <div className="contenedor__countryQuiz">
        <h1 className='titulo__countryQuiz'>COUNTRY QUIZ</h1>
        <div className="contenedor__countryQuiz-cuestion">
          <span className='image__countryQuiz'></span>

          <Preguntas 
          pregunta={preRe.pregunta}
          linkSrc={preRe.flag}
          />
          <Respuestas 
          opcion={'A'}
          respuesta={opcion}
          />
          <Respuestas 
          opcion={'B'}
          respuesta={''}
          />
          <Respuestas 
          opcion={'C'}
          respuesta={''}
          />
          <Respuestas 
          opcion={'D'}
          respuesta={''}
          /> 
        </div>
      </div>
    </div>
  );
}

export default App;
