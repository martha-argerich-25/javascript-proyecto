// Q chat//
//ARRAY  con objetos dentro de objetos - PREGUNTAS Y RESPUESTAS//

const preguntas = [

    {id:1,
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
    
    },{id:2,
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
    { id:3,
        pregunta : "3. Cuando su hijo/a está jugando solo/a, ¿alínea objetos?",
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
    {id:4,
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
    {id:5,
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
    {id:6,
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
    { id:7,
        pregunta : "7. ¿Cuánto tiempo puede un objeto giratorio mantener el interés de su hijo/a (por ej: lavarropas, ventilador, ruedas de autitos)?",
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
    { id:8,
        pregunta : "8. ¿Cuántas palabras puede decir su hijo/a?",
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
    {   id:9,
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
    {id:10,
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
    { id:11,
        pregunta : "11. ¿Con qué frecuencia su hijo/a huele o lame objetos inusuales?",
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
    
    { id:12,
        pregunta : "112. ¿Agarra su hijo/a su mano y la pone sobre un objeto cuando quiere que Ud. lo use (por ej: sobre la manija de la puerta cuando quiere que Ud le abra la puerta, o sobre un juguete cuando quiere que Ud lo active)?",
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
    { id:13,
        pregunta : "13. ¿Camina su hijo/a en puntas de pie??",
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
        id:14,
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
    {id:15,
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
    { id:16,
        pregunta : "16. ¿Hace su hijo/a la misma cosa una y otra vez (por ej: hacer correr el agua de la canilla, prender y apagar la luz, abrir y cerrar puertas)?",
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
    {id:17,
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
    { id:18,
        pregunta : "18. ¿Repite su hijo/a cosas que escucha (por ej: cosas que Ud dice, frases de canciones o películas, sonidos)?",
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
    {id:19,
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
    { id:20,
        pregunta : "20. ¿Realiza su hijo/a movimientos raros con los dedos de la mano cerca de sus ojos?",
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
    {id:21,
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
    { id:22,
        pregunta : "22. ¿Durante cuánto tiempo pueden sólo uno o dos objetos mantener el interés de su hijo/a?",
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
    { id:23,
        pregunta : "23. ¿Su hijo/a hace girar objetos repetitivamente (por ej: un pedacito de hilo)?",
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
    { id:24,
        pregunta : "24. ¿Parece su hijo/a ser hipersensible al ruido?",
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
    { id:25,
        pregunta : "25. ¿Su hijo/a es de mirar fijo a la nada sin un propósito aparente?",
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
   //METODO DE BUSQUEDA DE PREGUNTAS PRACTICAR FOREACH//
   preguntas.forEach(preguntas => {console.log(preguntas)
        
   });

    //solicitud de datos personales//
    let nombre =  prompt( " ingresa el nombre de su  hijo")
    let apellido = prompt(" ingrese el apellido")
    let edad = parseInt (prompt("ingrese la edad de su hijo en años"))

    alert("el nombre y apellido ingresado es  "+nombre+" "+ apellido+ " y su edad es"+" "+edad +" "+"años")
    // se le indica al usuario a colocar la palabra cuestionario para obtener la lista de preguntas//
    let cuestionario = prompt ("escriba la palabra cuestionario para solicitar las preguntas")
    if (cuestionario == "cuestionario"){

       for (const pregunta of preguntas){
           console.log(pregunta.pregunta)
           alert (pregunta.pregunta);
       } 
    }
    else if (cuestionario !="cuestionario"){
        alert("no coloco la palabra correcta")
    }

    // se le solicita responder las pregunta y colocar un numero segun la frecuencia (solo de 7 preguntas)//

    let pregunta1 = parseInt (prompt( "1. ¿La/Lo mira su hijo/a cuando Ud. dice su nombre siempre(0), habitualmente (1),a veces(2),rara vez (3), nunca (4)" ))

    

    let pregunta2 = parseInt (prompt( "¿Cuán fácil le resulta establecer contacto visual con su hijo/a? siempre(0), habitualmente (1),a veces(2),rara vez (3), nunca (4)" ))


  let pregunta3 = parseInt (prompt( "¿Cuando su hijo/a está jugando solo/a, ¿alínea objetos? siempre(0), habitualmente (1),a veces(2),rara vez (3), nunca (4)" ))

 let pregunta4 = parseInt (prompt( "4. ¿Pueden otras personas entender fácilmente a su hijo/a cuando habla? siempre(0), habitualmente (1),a veces(2),rara vez (3), nunca (4)" ))


     let pregunta5 = parseInt (prompt( "5. ¿Señala su hijo/a para indicar que quiere algo (por ej: un juguete que está fuera de su alcance)? siempre(0), habitualmente (1),a veces(2),rara vez (3), nunca (4)" ))
   
     let pregunta6 = parseInt (prompt( "¿Señala su hijo/a para compartir un interés con Ud (por ej: señalar hacia algo interesante que vio)? siempre(0), habitualmente (1),a veces(2),rara vez (3), nunca (4)" ))

     let pregunta7 = parseInt (prompt( "7. ¿Cuánto tiempo puede un objeto giratorio mantener el interés de su hijo/a (por ej: lavarropas, ventilador, ruedas de autitos)? siempre(0), habitualmente (1),a veces(2),rara vez (3), nunca (4)" ))

     let total = pregunta1+pregunta2+pregunta3+pregunta4+pregunta5+pregunta6+pregunta7

     // EL TEST ORIGINAL TIENE 25 PREGUNTAS Y LOS PUNTOS DE CORTE SON 44 , ES DECIR MAYOR A O MENOR A 44 PUNTOS//

// condicionales para el ejericio//
     if (total <=10){
         alert (" no esta dentro del espectro")
     }else if (total >10){
         alert ( " esta dentro del espectro autista")
     }
    
   
    