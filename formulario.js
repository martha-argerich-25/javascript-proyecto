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
        Swal.fire({
            icon: 'error',
            title: 'Debe completar el formulario',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })

        mensajeError.push('ingresa tu nombre');
    }
    if(password.value === null || password.value=== '' ){
        mensajeError.push('ingresa tu password');
        Swal.fire({
            icon: 'error',
            title: 'Debe completar el formulario',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }
    if(email.value=== null || email.value=== ''){
        mensajeError.push('ingrese su mail');
        Swal.fire({
            icon: 'error',
            title: 'Debe completar el formulario',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }
   // mensajes de error para separarlos/
    error.innerHTML = mensajeError.join(',');

   

return false;

}



