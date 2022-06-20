import { React, useState, useEffect } from "react";
import "./styles/App.css";
import { Quiz } from "./component/Quiz";
import Resultado from './component/Resultado';
import ContenedorCountryQuiz from "./containers/ContenedorCountryQuiz";
import PreguntasYRespuestas from './component/PreguntasYRespuestas';
import Header from "./component/Header";

function App() {
  //OBTENEMOS LAS PREGUNTAS Y RESPUESTAS DEL QUIZ
  // preRe = preguntas y respuetas
  const [preRe, setPreRe] = useState(''); //ESTADO PARA COMPLEMENTARLO CON EL useEffect
  const [next, setNext] = useState(false); //ESTADO PARA EL ButtonNext
  const [view, setView] = useState(true); //CON ESTA VARIABLE VAMOS A SABER QUE VISTA MOSTRAR AL USURAIO, SI MOSTRAMOS EL QUIZ O EL RESULTADO OBTENIDO, EL ESTADO DE CAMBIA EN LA FUNCION validacionRespuestas
  let [puntaje, setPuntaje] = useState(0); //ESTADO PARA ACTUALIZAR EL PUNTAJE DEL USUARIO LO ACTUALIZAMOS EN LA FUNCION nextQuestion

  useEffect(() => { //HACEMOS EL LLAMADO A LA API Y OBTENEMOS SUS DATOS CADA VEZ QUE SE EJECUTE ESTE HOOK
    Quiz(setPreRe);
  }, [next]);

  let elemento; /*VARIABLE PARA ALMACENAR UN ELEMENTO DEL DOM CUYA FUNCION SERA AGREGAR
  UNA CLASE UNA VEZ SE HAYA VALIDADO LA RESPUESTA QUE ESCOGÍO EL USUARIO*/

  /*****************************************/

  //ESTAS VARIABLES SE UTULIZAN EN LA FUNCION validacionResuesta, Y SERÁN PARA BUSCAR
  //LA RESPUESTA CORRECTA EN CASO QUE EL USUARIO ELIJA LA RESPUESTA INCORRECTA
  let opcionId1;
  let opcionId2;
  let opcionId3;
  let opcionId4;
  let arrayOpciones = [];
  //******************************************/
  let bandera; //CON ESTA VARIABLE SABREMOS CUALES SON LAS CLASES QUE HAY QUE ELIMINAR,LA USAMOS EN LA FUNCION validacionRespuesta y nextQuestion
  
  // FUNCION PARA CAMBIAR A LA SIGUIENTE PREGUNTA
  const nextQuestion = () => {

    if(bandera){
      //ELIMINAMOS TODAS LAS CALSES AÑADIDAS A LOS ELEMENTOS UNA VEZ HAYA PRESIONADO EL BOTON Next;

      elemento.classList.remove('contenedor__respuestas-correcto');
      elemento.children[2].classList.remove('bx-check-circle');
      elemento.children[2].classList.remove('icono-correctoIncorrecto');

      //ELIMONAMOS LOS ESTILOS PARA LAS LETRAS COLOR BLANCO
      for(let i = 0; i<2; i++){
        elemento.children[i].classList.remove('colorWhite');
      }

      //AUMENTAMOS EL PUNTAJE DEL USUARIO EN CASO DE RESPONDER CORRECTAMENTE
      setPuntaje(()=>{
        return puntaje++;
      });

      setNext(!next);

    };
  };

    //FUNCION PARA VALIDAR LA RESPUESTA
  const validacionRespuesta = (children, id) => {
    
    const respuestaJugador = children.props.respuesta; //OBTENEMOS LA RESPUESTA QUE EL USUARIO ELIGÍO

    elemento = document.getElementById(id); //OBTENEMOS EL CONTENEDOR QUE FUE SELECCIONADO POR EL USUARIO

    if(respuestaJugador == preRe.respuestaCorrecta){

      elemento.classList.add('contenedor__respuestas-correcto'); //AÑADIMOS LA CLASE EN CASO DE CUMPLIRSE LA CONDICIÓN
      elemento.children[2].classList.add('bx-check-circle'); //LE AÑADIMOS CLASE AL HIJO i QUE ES UN ICONO
      elemento.children[2].classList.add('icono-correctoIncorrecto'); //LE AÑADIMOS CLASE AL HIJO i QUE ES UN ICONO

      //AÑADIMOS ESTILOS PARA LAS LETRAS COLOR BLANCO
      for(let i = 0; i<2; i++){
        elemento.children[i].classList.add('colorWhite');
      }

      bandera = true; //SERVIRA PARA LUEGO SABER QUE CLASES ELIMINAR EN LA FUNCION nextQuestion

    }else{

      elemento.classList.add('contenedor__respuestas-incorrecto'); //AÑADIMOS LA CLASE EN CASO DE NO CUMPLIRSE LA CONDICIÓN
      elemento.children[2].classList.add('bx-x-circle'); //LE AÑADIMOS CLASE AL HIJO i QUE ES UN ICONO
      elemento.children[2].classList.add('icono-correctoIncorrecto'); //LE AÑADIMOS CLASE AL HIJO i QUE ES UN ICONO

      //AÑADIMOS ESTILOS PARA LAS LETRAS COLOR BLANCO
      for(let i = 0; i<2; i++){
        elemento.children[i].classList.add('colorWhite');
      }

      //OBTENEMOS LAS OPCIONES PARA COMPARARLA Y BUSCAR LA RESPUESTA CORRECTA EN CASO DE QUE
      //EL USUARIO ELIJA LA RESPUESTA INCORRECTA
      opcionId1 = document.getElementById('1');
      opcionId2 = document.getElementById('2');
      opcionId3 = document.getElementById('3');
      opcionId4 = document.getElementById('4');

      arrayOpciones = [opcionId1,opcionId2,opcionId3,opcionId4]; //ARRAY DE CONTENEDOR DE RESPUESTAS

      //COMPARAMOS LAS OPCIONES

      arrayOpciones.forEach((opcion)=>{ //RECORREMOS TODAS LAS OPCIONES

        if(opcion.children[1].outerText == preRe.respuestaCorrecta){ //BUSCAMOS LA OOPCION CORRECTA

          opcion.classList.add('contenedor__respuestas-correcto'); //AGREEGAMOS LA CLASE A LA OPCION CORRECTA

          //AÑADIMOS ESTILOS PARA LAS LETRAS COLOR BLANCO
          for(let i = 0; i<2; i++){
            opcion.children[i].classList.add('colorWhite');
          };
        };
      });

      //CAMBIAMOS LA VISTA DEL USUARIO PARA EL RESULTADO CON UNA ESPERA DE 3s
      setTimeout(() => {
        setView(!view); //CAMBIAMOS LA VISTA
        Quiz(setPreRe); // CAMBIAMOS LA PREGUNTA
      }, 3000);

    };
  };

  //FUNCION PARA REANUDAR EL JUEGO

  const tryAgain = ()=> {

    setView(!view); //CAMBIAMOS LA VISTA DEL JUGADOR PARA EL QUIZ

    setPuntaje(0); //RESTABLECEMOS EL PUNTAJE DEL JUGADOR PARA UN NUEVO JUEGO
  }

  return (
    <div className="App">
      <ContenedorCountryQuiz>
        { view ? <PreguntasYRespuestas preRe = { preRe } validacionRespuesta = { validacionRespuesta } nextQuestion = { nextQuestion } /> : <Resultado puntuacion = { puntaje } restaurarJuego = { tryAgain } /> }
      </ContenedorCountryQuiz>
      <Header />
    </div>
  );
}

export default App;
