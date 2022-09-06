//SECCION FENOTIPO AMPLIADO //

//REGISTRO DE MEDICACION Y ALMACENAMIENTO EN LOCALSTORAGE //

const medicacion = document.querySelector("#form-medicacion")



function ValidarMedicacion (e){
e.preventDefault()
   
    console.log ("validando...")

    const nombreMedicamento = document.querySelector("#nombreM").value
    const cantidadMedicamento =document.querySelector("#cantidad").value


//USO DE LOCALSTORAG//
localStorage.setItem("#nombreM",JSON.stringify(nombreMedicamento))
localStorage.setItem("#cantidad",JSON.stringify(cantidadMedicamento))




    const respuesta = document.getElementById("respuesta");

    respuesta.textContent = `El medicamente cargado es ${nombreMedicamento} y la cantidad es ${cantidadMedicamento}`
 
}
medicacion.addEventListener("submit",ValidarMedicacion)


//----------------------------------------------------------------------------------------------//


// USO DE FETCH  PARA SOLICITAR INFORMACION DE MEDICACION  EN ARCHIVO JSONy cargarla//

const botonlista = document.getElementById("solicitarMedicacion")
//funcion para cargar medicacion del json//

function CargarMedicacion(){
    fetch("../listamedicacion.json")
    .then(function(res){
        return res.json();
    })
    .then (function(data){
        console.log(data)

        let html="";
        data.forEach (function(data){
html += ` 
<H4>Medicacion</H4>
<h4>${data.medicacion}</h4>
<H4>Cantidad</H4>
<p>${data.cantidad}</p>
<H4>Marca</H4>
<p>${data.marca}</p>
`;

        })
        document.getElementById("cargarmedicacion").innerHTML = html;
        
    })
    .catch (function(error){
        console.log(error);
    });
    

}


botonlista.addEventListener("click",CargarMedicacion);




