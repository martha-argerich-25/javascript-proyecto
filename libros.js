
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
