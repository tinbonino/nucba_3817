let body=document.querySelector("body");

// body.addEventListener("keypress",()=>{
//     alert("ha presionado una tecla")
// })

//Selectores

let gridito=document.querySelector("#gridito");
let chocolate=document.querySelector("#chocolate");
let menta=document.querySelector("#menta");
let h2=document.querySelector("#texto");
let form=document.querySelector("form");
let botonForm=document.querySelector("form button")
let h2Form=document.querySelector("#h2Form");
let modo=document.querySelector("#modo");

//Listeners

gridito.addEventListener("click",(event)=>{
    h2.innerHTML="Ese es un sabor muy exclusivo";
    console.log(event)

})
chocolate.addEventListener("click",()=>{
    h2.innerHTML="Ese es el sabor original";
})
menta.addEventListener("click",()=>{
    h2.innerHTML="MmMmMmmm";
})

form.addEventListener("submit",(e)=>{
e.preventDefault();
h2.innerHTML="Formulario enviado"
})

botonForm.addEventListener("click",()=>{
    
    h2Form.innerHTML="Se aplico el evento del boton"
})


// stop propagation

const parent = document.querySelector(".parent");
const child =document.querySelector(".child");

parent.addEventListener("click",()=>{
    h2Form.innerHTML="Rojo clickeado"
    
})
child.addEventListener("click",(e)=>{
    h2.innerHTML="azul clickeado"
    e.stopPropagation();
})

//estilos desde javascript

let divEstilos=document.querySelector("#estilos");

divEstilos.style.backgroundColor="green";
divEstilos.style.borderRadius="90px";
divEstilos.style.position="relative";
divEstilos.style.left="150px";
console.log(divEstilos.style)

//classlist

// modo.addEventListener("click",()=>{
//     if(body.classList.contains("dark")){
//         body.classList.remove("dark")
//     } else {
//         body.classList.add("dark")
//     }

// })

// con toggle

modo.addEventListener("click",()=>{
   body.classList.toggle("dark")

})
