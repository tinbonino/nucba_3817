let body=document.querySelector("body");

//crear elementos

let div = document.createElement("div");
let h2=document.createElement("h2");
let img=document.createElement("img");

h2.innerText="Dale DOM dale💪";
img.setAttribute("src","./logo.png");
img.classList.add("img");
// img.setAttribute("class","img"); // es lo mismo que la linea anterior

// Envio los elementos al DOM

div.appendChild(h2);
div.appendChild(img);
body.appendChild(div);
console.log(div)

// Ahora lo hacemos con bloque de HTML

body.innerHTML+=`
<div>
<h2>Dale DOM dale con Inner! 💪</h2>
<img src="./logo.png" class="img">
</div>`
;

const titulo="Animales!"
const arrayAnimales=["perro","gato","ornitorrinco","empanada"];

//usamos map para renderizar un array

body.innerHTML+=`
<h1>${titulo}</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore totam magnam possimus exercitationem vitae aspernatur.
</p>
${arrayAnimales.map(animal=>`<p>Hola soy un ${animal}</p>`).join("")}


`

// trabajamos con storage
let bienvenido=document.querySelector("#bienvenido");

if(localStorage.nombre){
    let nombreDelStorage=localStorage.getItem("nombre");
    bienvenido.innerHTML=`Bienvenido ${nombreDelStorage}`
}



let form=document.querySelector("form");
let nombre=document.querySelector("#nombre");
let apellido=document.querySelector("#apellido");
let edad=document.querySelector("#edad");

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    bienvenido.innerHTML=`Bienvenido ${nombre.value}`
    localStorage.setItem("nombre",nombre.value);

    let estudiante={
        nombre:nombre.value,
        apellido:apellido.value,
        edad:edad.value
    }

    localStorage.setItem("estudiante",JSON.stringify(estudiante))
    form.reset();
})
