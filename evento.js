
//ejercicio de EVENTOS //
const verificacion = document.getElementById("nombre");
const text = document.getElementById("mensaje");
const boton = document.getElementById("botonv")

verificacion.onchange =()=>{
if(verificacion.value.length >5 ){
    text.innerHTML ="constraseña segura";
}else {
    text.innerHTML ="contraseña insegura";
}
};


//-----------------uso de boton para evento-----------------//
boton.addEventListener("click",verificacion.onchange);
