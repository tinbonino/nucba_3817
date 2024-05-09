// // setTimeout

// const saludar = () => {
//   console.log("Feliz Cumple Yuki! 🎉")
// }

// setTimeout(saludar,5000)

// //setInterval

// let interButton=document.querySelector("#intervalo");
// interButton.addEventListener("click",() => {
//     clearInterval(intervalo)
//     console.log("Intervalo detenido")
// })

// let intervalo=setInterval(saludar,1000)
// console.log("Estamos esperando que el intervalo siga repitiendose")

//Asincronismo

// console.log("Comenzando proceso");

// setTimeout(() => {
//   console.log("Proceso asincrónico finalizado")
// },5000)

// console.log("Proceso finalizado")

// Promesa

// const promesa = new Promise((resolve,reject) => {
//     setTimeout(() => {
//       let numeroAleatorio = Math.random();
//       console.log(numeroAleatorio);
//       if(numeroAleatorio>0.5) {
//         resolve("La promesa se cumplio exitosamente") //decidimos que con ese valor la promesa se cumpla
//       } else {
//         reject(new Error("Se pudrió todo amigo")) // decidimos que con ese valor la promesa no se cumpla
//       }
//     },2000)
  
// })

// promesa   
//     .then((mensaje) => {   // siempre el then debe tener un callback con un argumento para que ahi se almacened lo que retorna la promesa
//       console.log(mensaje);
//     })
//     .catch((error) => {
//       console.log("QUe pena!! se debe haber perdido en el camino la respuesta")
//     })


fetch("https://jsonplaceholder.typicode.com/users")   // devuelve una promesa

    
    .then(response=>{
        console.log(response)
         return response.json()})  //devuelve una promesa
    
    
    .then(data=>console.log(data))


    .catch(error =>console.log(error))
