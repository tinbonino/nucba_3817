const registerForm=document.querySelector("#register-form");
const nameInput=document.querySelector("#name");
const lastNameInput=document.querySelector("#lastName");
const emailInput=document.querySelector("#email");
const passInput=document.querySelector("#password");
const phoneInput=document.querySelector("#phone");

//Funciones Auxiliares

const users = JSON.parse(localStorage.getItem("users")) || [];
//                 chequeo si hay algo en el storage    o  creo un array vacio

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


// Funciones de validación de los inputs

const checkTextInput=(input) =>{
    let valid=false;
    const minCharacters=3;
    const maxCharacters=25;

    if(isEmpty(input)){
        showError(input, "Este campo es obligatorio")
        return;
    }
    if(!isBetween(input,minCharacters,maxCharacters)){
        showError(input,`Este campo debe tener entre ${minCharacters} y ${maxCharacters} caracteres`);
        return;
    }

    showSuccess(input);
    valid=true;
    return valid;
}

const checkEmail = (input)=>{

    let valid=false;
    if(isEmpty(input)){
        showError(input, "El email es obligatorio")
        return;
    }

    if (!isEmailValid(input)){
        showError(input,"El email no es válido");
        return;
    }

    if (isExistingEmail(input)){
        showError(input,"El email ya se encuentra registrado");
        return;
    }

    showSuccess(input);
    valid=true;
    return valid;

}

const checkPassword= (input) =>{
    let valid=false;

    if(isEmpty(input)){
        showError(input, "La contraseña es obligatorio")
        return;
    }
    if(!isPassSecure(input)){
        showError(input,"La contraseña debe contener al menos 8 caracteres, una mayuscula, una minuscula y un simbolo");
        return;
    }
    showSuccess(input);
    valid = true;
    return valid;

}

const checkPhone = (input)=>{
    let valid=false;
    if(isEmpty(input)){
        showError(input, "El telefono es obligatorio");
        return;
    }
    if (!isPhoneValid(input)) {
        showError(input,"El telefono no es válido");
        return;
    }

    showSuccess(input);
    valid = true;
    return valid;
};

// Validación general y almacenamiento de los datos


const validateForm= (e)=>{
    e.preventDefault();
    
    //Almacenamos en variables el estado de los inputs

    let isNameValid=checkTextInput(nameInput);
    let isLastNameValid=checkTextInput(lastNameInput);
    let isEmailValid=checkEmail(emailInput);
    let isPasswordValid=checkPassword(passInput);
    let isPhoneValid=checkPhone(phoneInput);

    let isValidForm= isNameValid && isLastNameValid && isEmailValid && isPasswordValid && isPhoneValid;

    if(isValidForm){
        users.push({
            name: nameInput.value,
            lastName: lastNameInput.value,
            email: emailInput.value,
            password: passInput.value,
            phone: phoneInput.value
        });
        saveToLocalStorage(users);
        alert("Te has registrado con éxito");
        window.location.href="login.html";
    }
};

// Funcion inicializadora

const init= ()=>{
    registerForm.addEventListener("submit", validateForm);
    // validar por evento input cada campo
    nameInput.addEventListener("input", () => checkTextInput(nameInput));
    lastNameInput.addEventListener("input", () => checkTextInput(lastNameInput));
    emailInput.addEventListener("input", () => checkEmail(emailInput));
    passInput.addEventListener("input", () => checkPassword(passInput));
    phoneInput.addEventListener("input", () => checkPhone(phoneInput));
};

init();