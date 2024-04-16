// Contenedor de productos
const productsContainer = document.querySelector(".products-container");
// Contenedor de productos del carrito
const productsCart = document.querySelector(".cart-container");
//El total en precio del carrito
const total = document.querySelector(".total");
// El contenedor de las categorías
const categoriesContainer = document.querySelector(".categories");
// Un htmlCollection de botones de todas las categorías (mostrar el dataset)
const categoriesList = document.querySelectorAll(".category");
// Botón de ver más
const showMoreBtn = document.querySelector(".btn-load");
// Botón de comprar
const buyBtn = document.querySelector(".btn-buy");
// Botón para abrir y cerrar carrito
//Burbuja de cantidad de productos en el carrito
const cartBubble = document.querySelector(".cart-bubble");
const cartBtn = document.querySelector(".cart-label");
// Botón para abrir y cerrar menú
const menuBtn = document.querySelector(".menu-label");
// Carrito
const cartMenu = document.querySelector(".cart");
//  Menú (Hamburguesa)
const barsMenu = document.querySelector(".navbar-list");
//  Overlay para tirar facha abajo del menú hamburguesa y el cart.
const overlay = document.querySelector(".overlay");
//  Modal de agregado al carrito.
const successModal = document.querySelector(".add-modal");
//  Modal de agregado al carrito.
const deleteBtn = document.querySelector(".btn-delete");

// Seteamos el carrito , vacío o lo que este en el localStorage según corresponda, igual que en los proyectos anteriores
let cart = JSON.parse(localStorage.getItem("cart")) || [];

//Función para guardar el carrito en el localStorage
const saveCart = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

/*---------------------------------------------------------------------- */
/*---------------------- Lógica de productos---------------------------- */
/*---------------------------------------------------------------------- */

/**
 * Función para crear el html de un producto
 * IMPORTANTE: Hacer hincapie en los data-attributes del botón de agregar al carrito
 * @param {object} product  Objeto con la información del producto
 * @returns  {string}  html del producto
 */
const createProductTemplate = (product) => {
  const { id, name, bid, user, userImg, cardImg } = product;
  return ` 
    <div class="product">
        <img src=${cardImg} alt=${name} />
        <div class="product-info">

            <div class="product-top">
                <h3>${name}</h3>
                <p>Current Bid</p>
            </div>

            <div class="product-mid">
                <div class="product-user">
                    <img src=${userImg} alt="user" />
                    <p>@${user}</p>
                </div>
                <span>${bid} eTH</span>
            </div>


            <div class="product-bot">
                <div class="product-offer">
                    <div class="offer-time">
                        <img src="./assets/img/fire.png" alt="" />
                        <p>05:12:07</p>
                    </div>
                    <button class="btn-add"
                    data-id='${id}'
                    data-name='${name}'
                    data-bid='${bid}'
                    data-img='${cardImg}'>Add</button>
                </div>
            </div>
        </div>
    </div>`;
};

/**
 * Función para renderizar una lista de productos
 * @param {object[]} productsList  Array de productos
 */
const renderProducts = (productsList) => {
  productsContainer.innerHTML += productsList
    .map(createProductTemplate)
    .join("");
};

/*---------------------------------------------------------------------- */
/*---------------------- Lógica de "ver más"---------------------------- */
/*---------------------------------------------------------------------- */

/**
 * Función para saber si el índice actual renderizado de la lista de productos productos es igual al límite de productos
 * @returns {boolean}  true si el índice actual de productos es igual al límite de productos (Total de subarrays en el array de productos divididos), false en caso contrario
 */
const isLastIndexOf = () => {
  return appState.currentProductsIndex === appState.productsLimit - 1;
};

/**
 * Función para renderizar más productos cuando se apreta el botón de "ver más"
 * Si luego de renderizar se alcanza el límite de productos (Total de subarrays en el array de productos divididos), se oculta el botón
 */
const showMoreProducts = () => {
  appState.currentProductsIndex += 1;
  let { products, currentProductsIndex } = appState;
  renderProducts(products[currentProductsIndex]);
  if (isLastIndexOf()) {
    showMoreBtn.classList.add("hidden");
  }
};

/**
 *  Función para mostrar u ocultar el botón de "ver más" según corresponda
 */
const setShowMoreVisibility = () => {
  if (!appState.activeFilter) {
    showMoreBtn.classList.remove("hidden");
    return;
  }
  showMoreBtn.classList.add("hidden");
};

/*---------------------------------------------------------------------- */
/*------------------------ Lógica de filtros --------------------------- */
/*---------------------------------------------------------------------- */

/**
 * Función para cambiar el estado de los botones de categorías
 * NOTA: Se utiliza el operador spread para convertir el NodeList en un array y poder utilizar el método forEach
 * @param  {string} selectedCategory  Nombre de la categoría seleccionada
 */
const changeBtnActiveState = (selectedCategory) => {
  const categories = [...categoriesList]; // creamos un array con spread operator
  categories.forEach((categoryBtn) => {
    if (categoryBtn.dataset.category !== selectedCategory) {
      categoryBtn.classList.remove("active");
      return;
    }
    categoryBtn.classList.add("active");
  });
};

/**
 * Función para cambiar el estado del filtro activo.
 * Recibe el botón que se apretó y guarda el dataset.category en el estado de la app como nuevo filtro actual.
 * Llama a la función changeBtnActiveState para cambiar el estado de los botones de categorías.
 * Llama a la función setShowMoreVisibility para mostrar u ocultar el botón de "ver más" según corresponda.
 * @param {object} btn  Botón que se apretó
 */
const changeFilterState = (btn) => {
  appState.activeFilter = btn.dataset.category;
  changeBtnActiveState(appState.activeFilter);
  setShowMoreVisibility(appState.activeFilter);
};

/**
 * Función para aplicar el filtro cuando se apreta un botón de categoría
 * Si el botón que se apretó no es un botón de categoría o ya está activo, no hace nada.
 * Llama a la función changeFilterState para cambiar el estado del filtro activo.
 * Limpia el html de los productos renderizados.
 * Si hay un filtro activo, llama a la función renderFilteredProducts para renderizar los productos filtrados.
 * Si se apreta el boton de todas, al no tener un dataset.category ese botón, el filtro activo se vuelve undefined y se renderizan todos los productos.
 * @param {event} event  Evento de click (usamos destructuring para tomar el target del evento)
 */
const applyFilter = ({ target }) => {
  if (!isInactiveFilterBtn(target)) return;
  changeFilterState(target);
  productsContainer.innerHTML = "";
  if (appState.activeFilter) {
    renderFilteredProducts();
    appState.currentProductsIndex = 0;
    return;
  }
  renderProducts(appState.products[0]);
};

/**
 * Función para saber si el elemento que se apretó es un botón de categoría y no está activo
 * @param {object} btn elemento que se apreto
 * @returns {boolean} true si el elemento es un botón de categoría y no está activo, false en caso contrario
 */
const isInactiveFilterBtn = (element) => {
  return (
    element.classList.contains("category") &&
    !element.classList.contains("active")
  );
};

/**
 * Función para filtrar los productos por categoría y renderizarlos.
 */
const renderFilteredProducts = () => {
  const filteredProducts = productsData.filter(
    (product) => product.category === appState.activeFilter
  );
  renderProducts(filteredProducts);
};

/*-----------------------------------------------------*/
/*--------------------Menu interface-------------------*/
/*-----------------------------------------------------*/

/**
 * Función para mostrar u ocultar el menú hamburguesa y el overlay según corresponda
 * Togglea el menu y si el carrito esta abierto , lo cierra. Finalmente, muestra el overlay si no había nada abierto se esta abriendo el menú
 */
const toggleMenu = () => {
  barsMenu.classList.toggle("open-menu");
  if (cartMenu.classList.contains("open-cart")) {
    cartMenu.classList.remove("open-cart");
    return; // Si ya había algo abierto, no se togglea el overlay, por eso el return
  }
  overlay.classList.toggle("show-overlay");
};

/**
 * Función para mostrar u ocultar el carrito y el overlay según correspondaw
 * Togglea el cart y si el menu esta abierto , lo cierra. Finalmente, muestra el overlay si no había nada abierto y se esta abriendo el carrito
 */
const toggleCart = () => {
  cartMenu.classList.toggle("open-cart");
  if (barsMenu.classList.contains("open-menu")) {
    barsMenu.classList.remove("open-menu");
    return; // Si ya había algo abierto, no se togglea el overlay, por eso el return
  }
  overlay.classList.toggle("show-overlay");
};

/**
 * Función para cerrar el menú hamburguesa y el overlay cuando se hace click en un link del menú
 * Al clickear un enlace del menú hamburguesa, lo cierra. Si lo que clickeemos dentro de el ul no contiene la clase "navbar-link" no pasa nada.
 * @param {event} e   Evento de click
 * @returns
 */
const closeOnClick = (e) => {
  if (!e.target.classList.contains("navbar-link")) return;
  barsMenu.classList.remove("open-menu");
  overlay.classList.remove("show-overlay");
};

/**
 *  Función para cerrar el menú hamburguesa o el carrito y ocultar el overlay cuando se hace scroll
 * Al scrollear, si está abierto el menú o el carrito, ejecuta las funciones correspondientes para cerrarlos y ocultar el overlay.
 */
const closeOnScroll = () => {
  if (
    barsMenu.classList.contains("open-menu") ||
    cartMenu.classList.contains("open-cart")
  ) {
    barsMenu.classList.remove("open-menu");
    cartMenu.classList.remove("open-cart");
    overlay.classList.remove("show-overlay");
  }
};

/**
 * Función para cerrar el menú hamburguesa o el carrito y ocultar el overlay cuando se hace click en el overlay
 */
const closeOnOverlayClick = () => {
  barsMenu.classList.remove("open-menu");
  cartMenu.classList.remove("open-cart");
  overlay.classList.remove("show-overlay");
};

/*-----------------------------------------------------------------------------*/
/*--------------------Logica de agregar al carrito --------------------------*/
/*-----------------------------------------------------------------------------*/

/**
 * Función para crear el template de un producto del carrito
 * @param {object} cartProduct  Objeto con la información del producto que se quiere agregar al carrito
 * @returns {string}  Template del producto del carrito
 */
const createCartProductTemplate = (cartProduct) => {
  const { id, name, bid, img, quantity } = cartProduct;
  return `    
    <div class="cart-item">
      <img src=${img} alt="Nft del carrito" />
      <div class="item-info">
        <h3 class="item-title">${name}</h3>
        <p class="item-bid">Current bid</p>
        <span class="item-price">${bid} ETH</span>
      </div>
      <div class="item-handler">
        <span class="quantity-handler down" data-id=${id}>-</span>
        <span class="item-quantity">${quantity}</span>
        <span class="quantity-handler up" data-id=${id}>+</span>
      </div>
    </div>`;
};

/**
 * Función para renderizar los productos del carrito o el mensaje de  "No hay productos en el carrito"
 * Revisa si el array del carrito está vacío, si lo está, renderiza el mensaje de "No hay productos en el carrito", sino, renderiza los productos del carrito
 */
const renderCart = () => {
  if (!cart.length) {
    productsCart.innerHTML = `<p class="empty-msg">No hay productos en el carrito.</p>`;
    return;
  }
  productsCart.innerHTML = cart.map(createCartProductTemplate).join("");
};

/**
 * Función para obtener el total de la compra
 * @returns  {number} Total de la compra
 */
const getCartTotal = () => {
  return cart.reduce((acc, cur) => acc + Number(cur.bid) * cur.quantity, 0);
};
