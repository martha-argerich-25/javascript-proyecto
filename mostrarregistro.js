
//FUNCION PARA ALMACENAR Y MOSTRAR DATOS SECCION FORMULARIO//


let botontabla1 = document.getElementById("botontabla")
let botoncom = document.getElementById("botoncomprobar")



//ARRAY DONDE SE VAN ALMACENAR//
let nombredata = []
let emaildata = []


//FUNCION PARA GUARDAR LOS DATOS EN EL LOCALSTORAGE//
function getdata (){
let nombredata = document.getElementById('nombre').value
let passworddata =document.getElementById('password').value
let emaildata = document.getElementById('email').value
console.log(nombredata,passworddata,emaildata)


nombredata.push
emaildata.push

//USO DE LOCALSTORAG// creo un string con json
localStorage.setItem("nombre",JSON.stringify(nombredata))
localStorage.setItem("email",JSON.stringify(emaildata))
    
}

//llamo al boton para invocar al metodo getdata//
botoncom.addEventListener("click", getdata);



//FUNCION PARA CREAR TABLA

function tabla(){

    let tablaa = document.querySelector("#tablaregistro")

    tabla.innerHTML='';
// transformo el string en formato js con el .jsonparse
    let nombretabla = JSON.parse (localStorage.getItem("nombre"))
    let emailtable = JSON.parse(localStorage.getItem("email"))

    let cantidadnombre = nombretabla.length;


    for (let i = 0 ; i < cantidadnombre; i++){
//creo la fila//
        let fila =document.createElement ('tr');
        //creo las celdas//
        let celdanombre = document.createElement('th');
         let celdamail = document.createElement('th');

        let nodoTextonombre = document.createTextNode(nombretabla[i]);
        let   nodoTextomail = document.createTextNode(emailtable[i]);

       celdanombre.appendChild(nodoTextonombre)
       celdamail.appendChild(nodoTextomail)

       fila.appendChild(celdanombre);
       fila.appendChild(celdamail);

       tablaa.appendChild(fila);

    }
}

//boton para llamar la funcion y crear la tabla//
botontabla1.addEventListener("click",tabla)