// Q chat//
//ARRAY CON PREGUNTAS Y RESPUESTAS//

const preguntas = [

    {
        pregunta1 : "1. ¿La/Lo mira su hijo/a cuando Ud. dice su nombre?",
        respuesta1 : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuesta1a : 0,
    respuesta1b :1,
    respuesta1c:2,
    respuesta1d:3,
    respuesta1e:4
    
    },{
        pregunta2 : "2. ¿Cuán fácil le resulta establecer contacto visual con su hijo/a?",
        respuesta2 : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuesta2a : 0,
    respuesta2b :1,
    respuesta2c:2,
    respuesta2d:3,
    respuesta2e:4
    
    },
    { pregunta3 : "3. Cuando su hijo/a está jugando solo/a, ¿alínea objetos?",
        respuesta2 : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuesta3a : 4,
    respuesta3b :3,
    respuesta3c:2,
    respuesta3d:1,
    respuesta3e:0
    
    
    } ,
    {
        pregunta4 : "4. ¿Pueden otras personas entender fácilmente a su hijo/a cuando habla?",
        respuesta4 : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuesta4a : 0,
    respuesta4b :1,
    respuesta4c:2,
    respuesta4d:3,
    respuesta4e:4
    
    },
    {
        pregunta5 : "5. ¿Señala su hijo/a para indicar que quiere algo (por ej: un juguete que está fuera de su alcance)?",
        respuesta5 : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuesta5a : 0,
    respuesta5b :1,
    respuesta5c:2,
    respuesta5d:3,
    respuesta5e:4
    
    },
    {
        pregunta6 : "6. ¿Señala su hijo/a para compartir un interés con Ud (por ej: señalar hacia algo interesante que vio)?",
        respuesta6 : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuesta6a : 0,
    respuesta6b :1,
    respuesta6c:2,
    respuesta6d:3,
    respuesta6e:4
    
    },
    { pregunta7 : "7. ¿Cuánto tiempo puede un objeto giratorio mantener el interés de su hijo/a (por ej: lavarropas, ventilador, ruedas de autitos)?",
        respuesta7 : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuesta7a : 4,
    respuesta7b :3,
    respuesta7c:2,
    respuesta7d:1,
    respuesta7e:0
    
    
    } ,
    { pregunta8 : "8. ¿Cuántas palabras puede decir su hijo/a?",
        respuesta8 : {
            a : "ninguna—no ha comenzado a hablar todavía",
            b : "menos de 10 palabras",
            c: " 10-50 palabras",
            d : "51-100 palabras",
            e :"más de 100 palabras"
    
        },
    respuesta8a : 4,
    respuesta8b :3,
    respuesta8c:2,
    respuesta8d:1,
    respuesta8e:0
    
    
    } ,
    {
        pregunta9 : "9. ¿Su hijo/a juega a “hacer como si” (por ej: cuidar muñecas, hablar en un teléfono de juguete)?",
        respuesta9 : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuesta9a : 0,
    respuesta9b :1,
    respuesta9c:2,
    respuesta9d:3,
    respuesta9e:4
    
    },
    {
        pregunta10 : "10. ¿Su hijo/a mira hacia dónde Ud está mirando?",
        respuesta10 : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuesta10a : 0,
    respuesta10b :1,
    respuesta10c:2,
    respuesta10d:3,
    respuesta10e:4
    
    },
    { pregunta11 : "11. ¿Con qué frecuencia su hijo/a huele o lame objetos inusuales?",
        respuesta11 : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuesta11a : 4,
    respuesta11b :3,
    respuesta11c:2,
    respuesta11d:1,
    respuesta11e:0
    
    
    } ,
    
    { pregunta12 : "112. ¿Agarra su hijo/a su mano y la pone sobre un objeto cuando quiere que Ud. lo use (por ej: sobre la manija de la puerta cuando quiere que Ud le abra la puerta, o sobre un juguete cuando quiere que Ud lo active)?",
        respuesta12 : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuesta12a : 4,
    respuesta12b :3,
    respuesta12c:2,
    respuesta12d:1,
    respuesta12e:0
    
    
    } ,
    { pregunta13 : "13. ¿Camina su hijo/a en puntas de pie??",
        respuesta13 : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuesta13a : 4,
    respuesta13b :3,
    respuesta13c:2,
    respuesta13d:1,
    respuesta13e:0
    
    
    } ,
    {
        pregunta14 : "14. ¿Cuán fácil le resulta a su hijo/a adaptarse cuando su rutina cambia o cuando las cosas están fuera del lugar habitual?",
        respuesta14 : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuesta14a : 0,
    respuesta14b :1,
    respuesta14c:2,
    respuesta14d:3,
    respuesta14e:4
    
    },
    {
        pregunta15 : "15. ¿Si Ud o alguien más en la familia está visiblemente angustiado/a, muestra su hijo/a signos de querer consolarlo/ a (por ej: acariciando el pelo, abrazando)?",
        respuesta15 : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuesta15a : 0,
    respuesta15b :1,
    respuesta15c:2,
    respuesta15d:3,
    respuesta15e:4
    
    },
    { pregunta16 : "16. ¿Hace su hijo/a la misma cosa una y otra vez (por ej: hacer correr el agua de la canilla, prender y apagar la luz, abrir y cerrar puertas)?",
        respuesta16 : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuesta16a : 4,
    respuesta16b :3,
    respuesta16c:2,
    respuesta16d:1,
    respuesta16e:0
    
    
    } ,
    {
        pregunta17 : "17. Describiría las primeras palabras de su hijo/a como:",
        respuesta17 : {
            a : "muy tipicas",
            b : "bastante tipicas",
            c: "levemente inusuales",
            d : "muy inusuales",
            e :"no habla"
    
        },
    respuesta17a : 0,
    respuesta17b :1,
    respuesta17c:2,
    respuesta17d:3,
    respuesta17e:4
    
    },
    { pregunta18 : "18. ¿Repite su hijo/a cosas que escucha (por ej: cosas que Ud dice, frases de canciones o películas, sonidos)?",
        respuesta18 : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuesta18a : 4,
    respuesta18b :3,
    respuesta18c:2,
    respuesta18d:1,
    respuesta18e:0
    
    
    } ,
    {
        pregunta19 : "19. ¿Utiliza su hijo/a gestos simples (por ej: saluda con la mano cuando se despide)?",
        respuesta19 : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuesta19a : 0,
    respuesta19b :1,
    respuesta19c:2,
    respuesta19d:3,
    respuesta19e:4
    
    },
    { pregunta20 : "20. ¿Realiza su hijo/a movimientos raros con los dedos de la mano cerca de sus ojos?",
        respuesta20 : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuesta20a : 4,
    respuesta20b :3,
    respuesta20c:2,
    respuesta20d:1,
    respuesta20e:0
    
    
    } ,
    {
        pregunta21 : "21. Cuando su hijo/a se enfrenta a una situación desconocida, ¿le mira a la cara espontáneamente para comprobar su reacción?",
        respuesta21 : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuesta21a : 0,
    respuesta21b :1,
    respuesta21c:2,
    respuesta21d:3,
    respuesta21e:4
    
    },
    { pregunta22 : "22. ¿Durante cuánto tiempo pueden sólo uno o dos objetos mantener el interés de su hijo/a?",
        respuesta22 : {
            a : "la mayor part del dia",
            b : "varias horas",
            c: "media hora",
            d : "diez minutos",
            e :"un par de minutos"
    
        },
    respuesta22a : 4,
    respuesta22b :3,
    respuesta22c:2,
    respuesta22d:1,
    respuesta22e:0
    
    
    } ,
    { pregunta23 : "23. ¿Su hijo/a hace girar objetos repetitivamente (por ej: un pedacito de hilo)?",
        respuesta23 : {
            a : "muchas veces por dia",
            b : "algunas veces por dia",
            c: "algunas veces por semana",
            d : "menos de una vez por semana",
            e :"nunca"
    
        },
    respuesta23a : 4,
    respuesta23b :3,
    respuesta23c:2,
    respuesta23d:1,
    respuesta23e:0
    
    
    } ,
    { pregunta24 : "24. ¿Parece su hijo/a ser hipersensible al ruido?",
        respuesta24 : {
            a : "siempre",
            b : "habitualmente",
            c: "a veces",
            d : "raramente",
            e :"nunca"
    
        },
    respuesta24a : 4,
    respuesta24b :3,
    respuesta24c:2,
    respuesta24d:1,
    respuesta24e:0
    
    
    } ,
    { pregunta25 : "25. ¿Su hijo/a es de mirar fijo a la nada sin un propósito aparente?",
        respuesta25 : {
            a : "muchas veces por dia",
            b : "algunas veces por dia",
            c: "algunas veces por semana",
            d : "menos de una vez por semana",
            e :"nunca"
    
        },
    respuesta25a : 4,
    respuesta25b :3,
    respuesta25c:2,
    respuesta25d:1,
    respuesta25e:0
    
    
    } ,
    
    ]
    
    
    
    