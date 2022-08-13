//DESAFIO DOM INTERACTUANDO CON EL HTML//

//cambio el texto//
document.getElementById ("titulo1").innerHTML ="cambio el texto con DOM"


// creo un elemento de texto//

let nuevoElemento = document.createElement ("p")

nuevoElemento.innerHTML ="<h1>esto es un nuevo elemento creado con DOM</h1>"

document.body.append(nuevoElemento);

// creo otro elemento y lo borro//

let segundoElemento = document.createElement ("p")

segundoElemento.innerHTML = "<h1>segundo elemento</h1>"

document.body.append (segundoElemento);
segundoElemento.remove();


//cambio de titulos//
let nombre = prompt (" ingrese la palabra cambio")

if (nombre =="cambio"){
document.getElementById("titulo1").innerHTML ="cambiamos el titulo"

}else if (nombre != "cambio"){
    document.getElementById("titulo1").innerHTML = "Escalas de autismo"
}

//cambio de color//

    Document.getElementById("titulo1").className = "titulo-principal2";








