const registerForm=document.querySelector("#register-form");
const nameInput=document.querySelector("#name");
const lastNameInput=document.querySelector("#lastName");
const emailInput=document.querySelector("#email");
const passInput=document.querySelector("#password");
const phoneInput=document.querySelector("#phone");

//Funciones Auxiliares

const users = JSON.parse(localStorage.getItem("users")) || [];

// Funcion que almacena datos en el storage

const saveToLocalStorage=()=> {
    localStorage.setItem("users",JSON.stringify(users));
};

// Función que chequea si un campo está vacio

const isEmpty= (input)=> {  // false no esta vacio | true, esta vacio
    return !input.value.trim().length;
};

const isBetween=(input,min,max) => {
    return input.value.length>=min && input.value.length < max;
};

//Función para validar  el mail con expresiones regulares

const isEmailValid= (input)=>{
    const re= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    //testeamos
    return re.test(input.value.trim());
};

// Función para validar si el email existe.


const isExistingEmail = (input) =>{
    return users.some(user=>user.email===input.value.trim())
};

// Función para validar un password con regexp

const isPassSecure = (input) =>{
    const re= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    //testeamos
    return re.test(input.value.trim());
};

// Función para validar un telefono con regexp

const isPhoneValid =(input) =>{
    const re=/^[0-9]{10}$/;
    //testeamos
    return re.test(input.value.trim());
};

// Función para mostrar error al validar el input

const showError = (input,message) =>{
    const formField=input.parentElement;
    formField.classList.remove("success");
    formField.classList.add("error");
    const error=formField.querySelector("small");
    error.style.display="block";
    error.textContent=message;

};
const showSuccess = (input) =>{
    const formField=input.parentElement;
    formField.classList.remove("error");
    formField.classList.add("success");
    const error=formField.querySelector("small");
   
    error.textContent="";

};

