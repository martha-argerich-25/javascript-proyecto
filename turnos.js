

//SECCIONES TURNOS//

let citas = JSON.parse(localStorage.getItem("citas"));
const boton = document.getElementById("botonagregar")



if(citas){
    localStorage.setItem("citas",JSON.stringify(citas));

}else {
    localStorage.setItem("citas",JSON.stringify([]));
}

//funcion para visualizar las citas realizadas//

const visualizarCitas =()=>{
    let citasHTML=``;
let citas =JSON.parse(localStorage.getItem("citas"))
    citas.map(cita=>{
        citasHTML+= `<div class="cita"> 
       <h4>Nueva cita</h4>
        <p>nombre:<span>${cita.nombre}</span></p> 
        <p>apellido:<span>${cita.apellido}</span></p> 
        <p>fecha:<span>${cita.fecha}</span></p> 
        <p>hora:<span>${cita.hora}</span></p> 
        <p>sintomas:<span>${cita.sintomas}</span></p> 
        </div>`;


    });
    document.querySelector("#listadoCitas").innerHTML=citasHTML;


}

// funcion para agregar cita//

const agregarCita =()=>{
  

    let nombre = document.getElementById("nombre").value;
    let apellido =document.getElementById("apellido").value;
    let hora =document.getElementById("hora").value;
    let fecha =document.getElementById("fecha").value;
    let sintomas =document.getElementById("sintomas").value;




let nuevaCita = {
    nombre,
    apellido,
    fecha,
    hora,
    sintomas
}
citas.push(nuevaCita);
localStorage.setItem("citas", JSON.stringify(citas));
document.querySelector("#form").reset();
visualizarCitas();


}


    (Swal.fire({
        icon: '',
        title: 'Hola bienvenido a nuestro turnero',
        text: 'solicita tu turno!',
        footer: '<a href="">Why do I have this issue?</a>'
      }))





  boton.addEventListener("click",agregarCita)