
//REGISTRO DE MEDICACION Y ALMACENAMIENTO EN LOCALSTORAGE//

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

