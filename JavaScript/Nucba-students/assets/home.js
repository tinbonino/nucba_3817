const logoutBtn = document.getElementById("logout-message");
const userName = document.getElementById("user-name");

// Nos traemos el usuario activo del sessionStorage
const activeUser = JSON.parse(sessionStorage.getItem("activeUser"));

/**
 * Función para mostrar el nombre y apellido del usuario activo
 */
const showUserName = () => {
  userName.textContent = `${activeUser.name} ${activeUser.lastName}`;
};

/**
 * Función para cerrar sesion y regresar al index
 */
const logout = () => {
  if (window.confirm("¿Estas seguro que deseas cerrar sesion?")) {
    sessionStorage.removeItem("activeUser");
    window.location.href = "../index.html";
  }
};

/**
 * Función incializadora para ejecutar las funciones al cargar la página y agregar los listeners
 */
const init = () => {
  showUserName();
  logoutBtn.addEventListener("click", logout);
};

init();
