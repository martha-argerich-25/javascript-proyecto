

//SECCION LIBROS HTML-CARRITO DE COMPRAS//

const BotonAgregar = document.getElementById("botonagregar")
const botonCarrito = document.getElementById("checkout")
//carrito de compras//

//variables//
let productos = [];
let total= 0;

//funcion para agregar productos//
function agregar (producto,precio){
    console.log(producto,precio);
    productos.push(producto);
    total= total + precio;
    document.getElementById("checkout").innerHTML= `pagar ${total}` 
}
//funcion para pagar producto y que se sumen//
function pagar (){
  window.alert(productos.join(",\n"));
}

//funcion para eliminar el producto//

function sacar(producto,precio){
console.log(producto,precio);
total= 0;
document.getElementById("checkout").innerHTML =`pagar${total}`
}
botonCarrito.addEventListener("click",()=>Swal.fire(

  'finalizar compra!',
  'Muchas gracias por su compra!',
  'success'))




 




