const taskInput= document.querySelector("#taskInput");
const addTaskButton= document.querySelector("#addTaskButton");
const taskList= document.querySelector("#taskList");

//Creamos un toDo

function createTaskItem(task){
    const taskItem=document.createElement("li");
    taskItem.classList.add("task");
    taskItem.innerHTML=`
    <span>${task}</span>
    <button class="completeButton">Completa</button>
    <button class="deleteButton">Eliminar</button>
    `;

    const completeButton=taskItem.querySelector(".completeButton");
    const deleteButton=taskItem.querySelector(".deleteButton");

    completeButton.addEventListener("click",()=>{
        taskItem.classList.toggle("completed");
        completeButton.disabled=true;
    })

    deleteButton.addEventListener("click",()=>{
        taskItem.remove();
    });

    return taskItem;
}

addTaskButton.addEventListener("click",()=>{
    const taskText=taskInput.value.trim();
    if(taskText !== ""){
        const item=createTaskItem(taskText);
        taskList.appendChild(item);
        taskInput.value="";
    }
})

const modo=document.querySelector("#modo");

modo.addEventListener("click",()=>{
    document.body.classList.toggle("dark")
})

// Agregamos renderizado dinámico, formularios y storage

const form=document.querySelector("form");
const nombre=document.querySelector("#nombre");
const apellido=document.querySelector("#apellido");
const edad=document.querySelector("#edad");
const bienvenido=document.querySelector("#bienvenido")


form.addEventListener("submit",(e)=>{
    e.preventDefault();

    bienvenido.innerHTML=`Bienvenido ${nombre.value}`

    let estudiante ={
        nombre:nombre.value.trim(),
        apellido:apellido.value.trim().toUpperCase(),
        edad:edad.value
    }

    console.log(estudiante)

    localStorage.setItem("estudiante",JSON.stringify(estudiante));
    form.reset();


})

let estudianteStorage=JSON.parse(localStorage.getItem("estudiante"))

let datos=document.querySelector("#datos");
datos.innerHTML=`
<div>
<h2>Nombre: ${estudianteStorage.nombre}</h2>
<h2>Apellido: ${estudianteStorage.apellido}</h2>
<h3>Edad: ${estudianteStorage.edad}</h3>
</div>
<a href="./index.html">Volver</a>

`
