// Q chat//
//ARRAY CON PREGUNTAS Y RESPUESTAS//

const preguntas = [

    {
        pregunta : "1. ¿La/Lo mira su hijo/a cuando Ud. dice su nombre?",
        respuesta : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuestaa : 0,
    respuestab :1,
    respuestac:2,
    respuestad:3,
    respuestae:4
    
    },{
        pregunta : "2. ¿Cuán fácil le resulta establecer contacto visual con su hijo/a?",
        respuesta : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuestaa : 0,
    respuestab :1,
    respuestac:2,
    respuestad:3,
    respuestae:4
    
    },
    { pregunta : "3. Cuando su hijo/a está jugando solo/a, ¿alínea objetos?",
        respuesta : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuestaa : 4,
    respuestab :3,
    respuestac:2,
    respuestad:1,
    respuestae:0
    
    
    } ,
    {
        pregunta : "4. ¿Pueden otras personas entender fácilmente a su hijo/a cuando habla?",
        respuesta : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuestaa : 0,
    respuestab :1,
    respuestac:2,
    respuestad:3,
    respuestae:4
    
    },
    {
        pregunta : "5. ¿Señala su hijo/a para indicar que quiere algo (por ej: un juguete que está fuera de su alcance)?",
        respuesta : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuestaa : 0,
    respuestab :1,
    respuestac:2,
    respuestad:3,
    respuestae:4
    
    },
    {
        pregunta : "6. ¿Señala su hijo/a para compartir un interés con Ud (por ej: señalar hacia algo interesante que vio)?",
        respuesta : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuestaa : 0,
    respuestab :1,
    respuestac:2,
    respuestad:3,
    respuestae:4
    
    },
    { pregunta : "7. ¿Cuánto tiempo puede un objeto giratorio mantener el interés de su hijo/a (por ej: lavarropas, ventilador, ruedas de autitos)?",
        respuesta : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuestaa : 4,
    respuestab :3,
    respuestac:2,
    respuestad:1,
    respuestae:0
    
    
    } ,
    { pregunta : "8. ¿Cuántas palabras puede decir su hijo/a?",
        respuesta : {
            a : "ninguna—no ha comenzado a hablar todavía",
            b : "menos de 10 palabras",
            c: " 10-50 palabras",
            d : "51-100 palabras",
            e :"más de 100 palabras"
    
        },
    respuestaa : 4,
    respuestab :3,
    respuestac:2,
    respuestad:1,
    respuestae:0
    
    
    } ,
    {
        pregunta : "9. ¿Su hijo/a juega a “hacer como si” (por ej: cuidar muñecas, hablar en un teléfono de juguete)?",
        respuesta : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuestaa : 0,
    respuestab :1,
    respuestac:2,
    respuestad:3,
    respuestae:4
    
    },
    {
        pregunta : "10. ¿Su hijo/a mira hacia dónde Ud está mirando?",
        respuesta : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuestaa : 0,
    respuestab :1,
    respuestac:2,
    respuestad:3,
    respuestae:4
    
    },
    { pregunta : "11. ¿Con qué frecuencia su hijo/a huele o lame objetos inusuales?",
        respuesta : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuestaa : 4,
    respuestab :3,
    respuestac:2,
    respuestad:1,
    respuestae:0
    
    
    } ,
    
    { pregunta : "112. ¿Agarra su hijo/a su mano y la pone sobre un objeto cuando quiere que Ud. lo use (por ej: sobre la manija de la puerta cuando quiere que Ud le abra la puerta, o sobre un juguete cuando quiere que Ud lo active)?",
        respuesta : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuestaa : 4,
    respuestab :3,
    respuestac:2,
    respuestad:1,
    respuestae:0
    
    
    } ,
    { pregunta : "13. ¿Camina su hijo/a en puntas de pie??",
        respuesta : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuestaa : 4,
    respuestab :3,
    respuestac:2,
    respuestad:1,
    respuestae:0
    
    
    } ,
    {
        pregunta : "14. ¿Cuán fácil le resulta a su hijo/a adaptarse cuando su rutina cambia o cuando las cosas están fuera del lugar habitual?",
        respuesta : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuestaa : 0,
    respuestab :1,
    respuestac:2,
    respuestad:3,
    respuestae:4
    
    },
    {
        pregunta : "15. ¿Si Ud o alguien más en la familia está visiblemente angustiado/a, muestra su hijo/a signos de querer consolarlo/ a (por ej: acariciando el pelo, abrazando)?",
        respuesta : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuestaa : 0,
    respuestab :1,
    respuestac:2,
    respuestad:3,
    respuestae:4
    
    },
    { pregunta : "16. ¿Hace su hijo/a la misma cosa una y otra vez (por ej: hacer correr el agua de la canilla, prender y apagar la luz, abrir y cerrar puertas)?",
        respuesta : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuestaa : 4,
    respuestab :3,
    respuestac:2,
    respuestad:1,
    respuestae:0
    
    
    } ,
    {
        pregunta : "17. Describiría las primeras palabras de su hijo/a como:",
        respuesta : {
            a : "muy tipicas",
            b : "bastante tipicas",
            c: "levemente inusuales",
            d : "muy inusuales",
            e :"no habla"
    
        },
    respuestaa : 0,
    respuestab :1,
    respuestac:2,
    respuestad:3,
    respuestae:4
    
    },
    { pregunta : "18. ¿Repite su hijo/a cosas que escucha (por ej: cosas que Ud dice, frases de canciones o películas, sonidos)?",
        respuesta : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuestaa : 4,
    respuestab :3,
    respuestac:2,
    respuestad:1,
    respuestae:0
    
    
    } ,
    {
        pregunta : "19. ¿Utiliza su hijo/a gestos simples (por ej: saluda con la mano cuando se despide)?",
        respuesta : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuestaa : 0,
    respuestab :1,
    respuestac:2,
    respuestad:3,
    respuestae:4
    
    },
    { pregunta : "20. ¿Realiza su hijo/a movimientos raros con los dedos de la mano cerca de sus ojos?",
        respuesta : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuestaa : 4,
    respuestab :3,
    respuestac:2,
    respuestad:1,
    respuestae:0
    
    
    } ,
    {
        pregunta : "21. Cuando su hijo/a se enfrenta a una situación desconocida, ¿le mira a la cara espontáneamente para comprobar su reacción?",
        respuesta : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuestaa : 0,
    respuestab :1,
    respuestac:2,
    respuestad:3,
    respuestae:4
    
    },
    { pregunta : "22. ¿Durante cuánto tiempo pueden sólo uno o dos objetos mantener el interés de su hijo/a?",
        respuesta : {
            a : "la mayor part del dia",
            b : "varias horas",
            c: "media hora",
            d : "diez minutos",
            e :"un par de minutos"
    
        },
    respuestaa : 4,
    respuestab :3,
    respuestac:2,
    respuestad:1,
    respuestae:0
    
    
    } ,
    { pregunta : "23. ¿Su hijo/a hace girar objetos repetitivamente (por ej: un pedacito de hilo)?",
        respuesta : {
            a : "muchas veces por dia",
            b : "algunas veces por dia",
            c: "algunas veces por semana",
            d : "menos de una vez por semana",
            e :"nunca"
    
        },
    respuestaa : 4,
    respuestab :3,
    respuestac:2,
    respuestad:1,
    respuestae:0
    
    
    } ,
    { pregunta : "24. ¿Parece su hijo/a ser hipersensible al ruido?",
        respuesta : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuestaa: 4,
    respuestab :3,
    respuestac:2,
    respuestad:1,
    respuestae:0
    
    
    } ,
    { pregunta : "25. ¿Su hijo/a es de mirar fijo a la nada sin un propósito aparente?",
        respuesta : {
            a : "muchas veces por dia",
            b : "algunas veces por dia",
            c: "algunas veces por semana",
            d : "menos de una vez por semana",
            e :"nunca"
    
        },
    respuestaa : 4,
    respuestab :3,
    respuestac:2,
    respuestad:1,
    respuestae:0
    
    
    } ,
    
    ]
    
function mostrarTest (){

    const preguntasYrespuestas =  [];

    preguntas.forEach((preguntaactual,numerodepregunta)=>{
const respuestas = [];
for (letrarespuesta in preguntaactual.respuesta){
    
}
    })

}
    
    
    