const taskInput=document.querySelector("#taskInput");
const addTaskButton=document.querySelector("#addTaskButton");
const taskList=document.querySelector("#taskList");

function createTaskItem(taskText) {
    const taskItem=document.createElement("li");
    taskItem.classList.add("task");
    taskItem.innerHTML=`
        <span>${taskText}</span>
        <button class="completeButton">Complete</button>
        <button class="deleteButton">Delete</button>
    `;

    const completeButton=taskItem.querySelector(".completeButton");
    const deleteButton=taskItem.querySelector(".deleteButton");

    completeButton.addEventListener("click",()=>{
        taskItem.classList.toggle("completed");
        completeButton.disabled=true;
    });

    deleteButton.addEventListener("click",()=>{
        taskItem.remove();
    });

    return taskItem;
}

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      const taskItem = createTaskItem(taskText);
      taskList.appendChild(taskItem);
      taskInput.value = '';
    }
  });


