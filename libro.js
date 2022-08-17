//1)ARRAY CON CON LIBROS Y PROPIEDADES//
const libros =[
    
    {id:1,nombre: "el cerebro autista",precio:50,desc:"un libro creado para comprender el autismo desde la mirada de la neurodiversidad",img:'../img/9788412100044.jpg'},
    {id:2,nombre: "el porvenir del autismo",precio:50,desc:"un libro interesante",img:'../img/cerebroautista.jpg.webp'},
    {id:3,nombre: "el autismo explicado a los no autistas",precio:50,desc:"un libro importante",img:'../img/autismo.png'},
];

//--------------------------------------------------------------------------//

//2)FUNCION PARA MOSTRAR LOS LIBROS EN EL HTML//
const ContenedorProducto = document.getElementById("contenedor-producto")
const contenedorCarrito = document.getElementById("carrito-contenedor")
const contadorcarrito= document.getElementById("contador-carrito")
//carrito vacio//

let carrito=[]



libros.forEach((producto)=>{

    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML=`
    <img src=${producto.img} alt="">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p>${producto.precio}</p>
   <button id="agregar${producto.id}" class="boton-agregar">agregar<i class="idclass"></i></button>
    
    `
    ContenedorProducto.appendChild(div)

      //para buscar el boton//


//3)-------------FUNCION PARA AGREGAR AGREGAR PRODUCTOS-------------

const agregarAlCarrito = (prodId)=>{

    const items = libros.find((prod)=> prod.id === prodId)
    carrito.push(items)
    actualizarCarrito()
  
}



const boton = document.getElementById("agregar1","agregar2","agregar3")
//4) al apretar ejecuta la funcion creada//

boton.addEventListener("click",agregarAlCarrito )

})
//---------------------------------------------------------------------------//






const actualizarCarrito =()=>{
//para que no se acumule el carrito//
    contenedorCarrito.innerHTML=""

    carrito.forEach((prod)=>{
        const div = document.createElement('div')
        div.classname =('productoEnCarrito')
        div.innerHTML
        `<p>${producto.nombre}</p>
        <p>precio${producto.precio}</p>
        <button onclick = "eliminarDelCarrito(${prod.id})" class="boton-eliminar><i class ="buton-eliminar"></i></button>
        `

        contenedorCarrito.appendChild(div)
       
    })
   
}



//----funcion para eliminar del carrito--------------//
const eliminarDelCarrito = (prodId)=>{
const items = carrito.find((prod)=> prod.id===prodId)
const indice = carrito.indexOf(items)
carrito.splice(indice,1)

actualizarCarrito()
}

//busco el boton vaciar//
const botonvaciar = document.getElementById("vaciar-carrito")
// llamo el boton vaciar//
botonvaciar.addEventListener("click",() => {
    carrito.length = 0;
    actualizarCarrito()
})

contadorcarrito.innertext = carrito.length