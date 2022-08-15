const contenedor = document.getElementById("test");
const botonRes = document.getElementById ("boton");
const resultadotest = document.getElementById ("resultado");


const preguntas =[
    { 
        pregunta :"¿Quiénes pueden padecer autismo?",
        respuestas :{
            a :"todos",
            b: " algunas personas",
            c:" 4 de cada 5 personas con autismo"
        },
        respuestaCorrecta:"c",
    

    },
    { 
        pregunta :"¿Cómo influye el autismo en el comportamiento?",
        respuestas :{
            a :"tienen dificultades para relacionarse socialmente, entender las emociones de otros y para expresar sus ideas.",
            b: " no influyen",
            c:" tienen mas dificultades que otras personas"
        },
        respuestaCorrecta:"a",
    

    },
    { 
        pregunta :"¿Qué tan severas llegan a ser las conductas de una persona autista?",
        respuestas :{
            a :"comportamientos agresivos o auto lesivo",
            b: " se clasifican en leves,moderadas  y severas",
            c:" no tienen conducas severas"
        },
        respuestaCorrecta:"a",
    

    },
    { 
        pregunta :"¿Pueden llegar a ser independientes?",
        respuestas :{
            a :"pueden vivir independientemente,con apoyo y guia",
            b: " no pueden vivir solas",
            c:" la mayoria no logra la independencia"
        },
        respuestaCorrecta:"a",
    

    },
    { 
        pregunta :"¿El autismo es igual que la discapacidad cognitiva?",
        respuestas :{
            a :"si",
            b: "es lo mismo",
            c:"  No. Ya que son condiciones distintas,"
        },
        respuestaCorrecta:"c",
    

    },
    { 
        pregunta :"¿Pueden trabajar las personas con autismo?",
        respuestas :{
            a :"si , con apoyo",
            b: " Si cuentan con el apoyo de entrenadores especializados en los trabajos, estas personas pueden adquirir habilidades y ser impulsados al éxito en el campo de empleo",
            c:" no pueden trabajar"
        },
        respuestaCorrecta:"b",
    

    },
    { 
        pregunta :"¿Qué tipo de trabajo puede realizar una persona con autismo?",
        respuestas :{
            a :"cualquier tipo de trabajo",
            b: " ningun trabajo ",
            c:" rinden mejor en trabajos que requieren de cierto grado de repetición de actividades y son estructurados."
        },
        respuestaCorrecta:"b",
    

    },
];

//funcion que recorrer todas las preguntas y respuestas dentro del array//

function mostrarTest (){
     const preguntasYrespuestas = [];

     preguntas.forEach ((preguntaActual,TotalDePreguntas)=> {
         const respuestas = [];

         for(LetraRespuesta in preguntaActual.respuestas){
             respuestas.push(
`<label> 
<input type ="radio" name ="${TotalDePreguntas}" value ="${LetraRespuesta}"/>
${LetraRespuesta} :${preguntaActual.respuestas[LetraRespuesta]}

</label>`
             );

         }
        preguntasYrespuestas.push(
            `<div class="cuestion"> ${preguntaActual.pregunta}</div>
            <div class="respuestas">${respuestas.join("")} </div>
            `
        );
     });

     //------------------------------------//
     contenedor.innerHTML = preguntasYrespuestas.join("");
}

mostrarTest();







// FUNCION DE LAS RESPUESTAS y comprobar los resultados finales//

function mostrarResultado (){

const respuestas = contenedor.querySelectorAll (".respuestas");

let respuestasCorrectas = 0;

preguntas.forEach((preguntaActual,TotalDePreguntas)=> {
const todasLasRespuestas = respuestas[TotalDePreguntas];
const checkboxRespuestas = `input [name ='${TotalDePreguntas}']:checked`;
const respuestaElegida = (
    todasLasRespuestas.querySelector(checkboxRespuestas) || {}).value; //en caso que la persona marque un objet vacio//

//condicionales//
if (respuestaElegida === preguntaActual.respuestaCorrecta){
    respuestasCorrectas++;
}



});

resultadotest.innerHTML = "el puntaje total es " + respuestasCorrectas 


}

// se agrega la funcion al boton//

botonRes.addEventListener("click",mostrarResultado);