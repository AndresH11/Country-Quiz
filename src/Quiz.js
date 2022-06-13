//FUNCION PARA GENERAR NUMEROS ALEATORIOS
export const countryRamdom = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

//ELEMENTO PRINCIPAL
export const Quiz = async (state) => {
  try {
    //HACEMOS LA PETICION A LA API
    const data = await (
      await fetch("https://restcountries.com/v3.1/all")
    ).json();

    const indice = countryRamdom(0, 10); //INDICE ALEATORIO
    const nameCountry = data[indice].name.common; //NOOMBRE DEL PAIS
    const capitalCountry = data[indice].capital; //CAPITAL DEL PAIS
    const flagCountry = data[indice].flags.svg; //BANDERA DEL PAIS
    const regionCountry = data[indice].region; //REGIONs DEL PAIS

    // OBJETOS DE PREGUNTAS
    const preguntasYRespuestas = [
      {
        pregunta: `Cual es la capital de ${nameCountry}`,
        respuestas:[
        capitalCountry, //RESPUESTA CORRRECTA
        data[countryRamdom(11,20)].capital,
        data[countryRamdom(21,30)].capital,
        data[countryRamdom(31,40)].capital,
        ],
      },
      {
        pregunta: `En que región está ${nameCountry}`,
        respuestas:[
        'Noroeste',
        `Asia`,
        `Américas`,
        `Europa`,
        regionCountry, //RESPUESTA CORRECTA
        ],
      },
      {
        pregunta: `A que pais pertenece la bandera`,
        respuestas:[
        nameCountry, //RESPUSETA CORRECTA
        data[countryRamdom(11,20)].name.common,
        data[countryRamdom(21,30)].name.common,
        data[countryRamdom(31,40)].name.common,
        ],
        flag: `${flagCountry}`,
      },
    ];

    const indicePregunta = countryRamdom(0, 3); //INDICE RANDOM

    //PASAMOS COMO ARGUMENTO LA FUNCION useState
    state(preguntasYRespuestas[indicePregunta]);
  } catch (error) {
    console.log(error);
  }
};

