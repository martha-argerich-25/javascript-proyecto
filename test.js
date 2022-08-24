const contenedor = document.getElementById("test");
const botonRes = document.getElementById ("boton");
const resultadotest = document.getElementById ("resultado");

const preguntas =[
  { id:1,
      pregunta :"¿Quiénes pueden padecer autismo?",
      respuestas :{
          a :"todos",
          b: " algunas personas",
          c:" 4 de cada 5 personas con autismo"
      },
      respuestaCorrecta:"c",
  

  },
  { id:2,
      pregunta :"¿Cómo influye el autismo en el comportamiento?",
      respuestas :{
          a :"tienen dificultades para relacionarse socialmente, entender las emociones de otros y para expresar sus ideas.",
          b: " no influyen",
          c:" tienen mas dificultades que otras personas"
      },
      respuestaCorrecta:"a",
  

  },
  { id:3,
      pregunta :"¿Qué tan severas llegan a ser las conductas de una persona autista?",
      respuestas :{
          a :"comportamientos agresivos o auto lesivo",
          b: " se clasifican en leves,moderadas  y severas",
          c:" no tienen conducas severas"
      },
      respuestaCorrecta:"a",
  

  },
  { id:4,
      pregunta :"¿Pueden llegar a ser independientes?",
      respuestas :{
          a :"pueden vivir independientemente,con apoyo y guia",
          b: " no pueden vivir solas",
          c:" la mayoria no logra la independencia"
      },
      respuestaCorrecta:"a",
  

  },
  { id:5,
      pregunta :"¿El autismo es igual que la discapacidad cognitiva?",
      respuestas :{
          a :"si",
          b: "es lo mismo",
          c:"  No. Ya que son condiciones distintas,"
      },
      respuestaCorrecta:"c",
  

  },
  { id:6,
      pregunta :"¿Pueden trabajar las personas con autismo?",
      respuestas :{
          a :"si , con apoyo",
          b: " Si cuentan con el apoyo de entrenadores especializados en los trabajos, estas personas pueden adquirir habilidades y ser impulsados al éxito en el campo de empleo",
          c:" no pueden trabajar"
      },
      respuestaCorrecta:"b",
  

  },
  { id:7,
      pregunta :"¿Qué tipo de trabajo puede realizar una persona con autismo?",
      respuestas :{
          a :"cualquier tipo de trabajo",
          b: " ningun trabajo ",
          c:" rinden mejor en trabajos que requieren de cierto grado de repetición de actividades y son estructurados."
      },
      respuestaCorrecta:"c",
  

  },
];
//_------------------------------funcion para mostrar el test//---------------
function mostrarTest() {
  const preguntasYrespuestas = [];

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = [];

    for (letraRespuesta in preguntaActual.respuestas) {
      respuestas.push(
        `<label>
                  <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
                  ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
              </label>`
      );
    }

    preguntasYrespuestas.push(
      `<div class="cuestion">${preguntaActual.pregunta}</div>
          <div class="respuestas"> ${respuestas.join("")} </div>
          `
    );
  });

  contenedor.innerHTML = preguntasYrespuestas.join("");
}

mostrarTest();
//-------------------funcion para mostrar el resultado--------------------------------//
function mostrarResultado() {
  const respuestas = contenedor.querySelectorAll(".respuestas");
  let respuestasCorrectas = 0;

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const todasLasRespuestas = respuestas[numeroDePregunta];
    const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
    const respuestaElegida = (
      todasLasRespuestas.querySelector(checkboxRespuestas) || {}
    ).value;

    if (respuestaElegida === preguntaActual.respuestaCorrecta) {
      respuestasCorrectas++;

      respuestas[numeroDePregunta].style.color = "blue";
    } else {
      respuestas[numeroDePregunta].style.color = "red";
    }
  });

  resultado.innerHTML =
    "las respuestas correctas fueron " +
    respuestasCorrectas +
    " preguntas de un total de " +
    preguntas.length;


    




}
//------------------------evento-------------------//

botonRes.addEventListener("click", mostrarResultado);

//USO DE LOCALSTORAGE PRIMERO GUARDAMOS CON SET y uso de stringify para obtener un string

localStorage.setItem("preguntas",JSON.stringify(preguntas))

preguntas = JSON.parse(localStorage.getItem("preguntas"));
console.log("preguntas")

