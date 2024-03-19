let estudiante=JSON.parse(localStorage.getItem("estudiante"));
console.log(estudiante);

let body=document.querySelector("body");

body.innerHTML=`
<div>
    <h2>Nombre: ${estudiante.nombre}</h2>
    <h2>Apellido: ${estudiante.apellido}</h2>
    <h3>Edad: ${estudiante.edad}</h3>
</div>
`