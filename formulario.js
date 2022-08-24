//FORMULARIO DE  VALIDACION//
let nombre = document.getElementById('nombre')
let password = document.getElementById('password')
let email = document.getElementById('email')
let error =document.getElementById('error');
error.style.color ='red';
console.log(nombre)

//boton de la funcion validar//
let botonvalidar = document.getElementById("submit")



//funcion para validarformulario//

function enviarFormulario(){

 

    console.log('enviando formulario...');
    


    let mensajeError =[];

//si dicho valor es igual a null o vacio se establece la condicion//
    if(nombre.value === null || nombre.value ===''){

        mensajeError.push('ingresa tu nombre');
    }
    if(password.value === null || password.value=== '' ){
        mensajeError.push('ingresa tu password');
    }
    if(email.value=== null || email.value=== ''){
        mensajeError.push('ingrese su mail');
    }
   // mensajes de error para separarlos/
    error.innerHTML = mensajeError.join(',');

   

return false;


}

