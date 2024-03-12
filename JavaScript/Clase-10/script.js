//querySelector

let titulo=document.querySelector("h1");

console.log(titulo);

let body = document.querySelector("body");
console.log(body);

titulo.innerHTML="Bienvenido al Kiosko de DOM Omar";

console.dir(titulo);

let h2=document.getElementsByTagName("h2");
console.log(h2);
let h2ConQuery=document.querySelectorAll("h2");
console.log(h2ConQuery)
let primerH2=document.querySelector("h2");

primerH2.innerHTML="Gracias por venir® (Gustavo Cerati)"

h2ConId=document.getElementById("subtitulo");

h2ConId.innerText="Conozca nuestros alfajores"

let div1=document.querySelector("#contenido")
let div2=document.querySelector("div")

console.log(div1);
console.log(div2);

//template string o template literal o plantilla


//creamos un ul con sus items
div1.innerHTML=`
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>

`

console.log(div1);

//seleccionamos los items

let li=document.querySelectorAll("li");
console.log(li)

//recorremos y cargamos cada item
for(let i=0;i<li.length;i++){
    li[i].innerHTML="Alfajor "+(i+1)
}

let helado=document.querySelector("#helado");

let sabor=prompt("Ingrese su sabor de helado favorito");
if(sabor=="super gridito"){

    helado.innerHTML=`<h2>Su sabor de helado favorito es: ${sabor}</h2>
    <h2>Retirese Dante por favor</h2>`
} else {
    helado.innerHTML=`<h2>Su sabor de helado favorito es: ${sabor}</h2>
    <h2>Es usted bienvenido</h2>`

}



