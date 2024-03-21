// Definimos las variables seleccionando los elementos

const addForm=document.querySelector(".add-form");
const taskInput=document.querySelector(".input-text");
const deleteAllBtn=document.querySelector(".deleteAll-btn");
const tasksList=document.querySelector(".tasks-list");

// Almaceno en la variable el contenido del storage o un array vacío
let taskList=JSON.parse(localStorage.getItem("tasks")) || [];

// Función que almacena en el storage

const saveLocalStorage= ()=>{
    localStorage.setItem("tasks",JSON.stringify(taskList))
};

//Función que crea cada tarea

const createTask= (task)=>
`<li>${task.name}<img class="delete-btn" src="./img/delete.svg"data-id="${task.id}"></li>` 

//función que renderiza la lista de tareas
//el join nos convierte el array en un string con todo el código junto sin las ","

const renderTaskList=()=>{
    tasksList.innerHTML=taskList.map(task=>createTask(task)).join("");
};

// Función que oculta el boton de borrar todas las tareas.

const toggleDeleteAllButton= ()=>{
    if(!taskList.length) { //evalua que no exista length, es decir que el array este vacio
        deleteAllBtn.classList.add("hidden");
        return; //corta todo el bloque de ejecución
    }
    deleteAllBtn.classList.remove("hidden");
};


// Función que normaliza los datos

const correctInputValue= ()=>{
    return taskInput.value.trim().replace(/\s+/g," "); //regexp
};

const isValidTask = (taskName)=>{
    let isValid=true;
    if(!taskName.length){
        alert("Por favor ingresá una tarea");
        isValid=false;
    } else if (taskList.some(task =>task.name.toLowerCase()===taskName.toLowerCase())){
        alert("Ya existe esa tarea");
        isValid=false;
    }
    return isValid;
}

// Función que agrega la tarea

const addTask=(e)=>{
    console.log("Prueba")
    e.preventDefault();
    const taskName=correctInputValue();
    if(isValidTask(taskName)){
        taskList=[...taskList,{name:taskName,id:Date.now()}];
        addForm.reset();
        renderTaskList();
        saveLocalStorage();
        toggleDeleteAllButton();
    }
}

//función que elimina tareas

const removeTask = (e) => {
    if (!e.target.classList.contains("delete-btn")) return;
    const filterId = Number(e.target.dataset.id);
    taskList = taskList.filter((task) => task.id !== filterId);
    renderTaskList();
    saveLocalStorage();
    toggleDeleteAllButton();
  };

//   * Función que borra todas las tareas del array de tareas
//   * Convertimos la tasklist de nuevo en un array vacio y volvemos a realizar los pasos de renderizar la lista de tareas, guardar en el localStorage y verificar si se debe mostrar o no el botón de borrar todas las tareas.
//   */
 const removeAll = () => {
   taskList = [];
   renderTaskList();
   saveLocalStorage();
   toggleDeleteAllButton();
 };

 //Función inicializadora

 const init = () => {
    // ejecutar renderTaskList en el evento DOMContentLoaded
    document.addEventListener("DOMContentLoaded", renderTaskList);
    addForm.addEventListener("submit", addTask);
    tasksList.addEventListener("click", removeTask);
    deleteAllBtn.addEventListener("click", removeAll);
    document.addEventListener("DOMContentLoaded", toggleDeleteAllButton);
  };

  init();