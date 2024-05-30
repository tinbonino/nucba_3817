const btnContainer= document.querySelector(".pagination");
const prevBTN= document.querySelector(".left");
const nextBTN= document.querySelector(".right");
const cardsContainer= document.querySelector(".cards-container");
const pageNumber= document.querySelector(".page-number");
const filterButtons=document.querySelectorAll(".btn");
const filterContainer= document.querySelector(".filter-container");


/* Las imágenes de movieDB vienen con una URL de base la cual se tiene que colocar en conjunto con lo que venga en el objeto de cada película para que la imagen aparezca. Guardamos esta en una constante. 
Para mas referencia :  https://developers.themoviedb.org/3/getting-started/images . Elegimos para esta APP el tamaño original.
*/
const ImgBaseUrl = "https://image.tmdb.org/t/p/original";

// Creamos un objeto que funcionará como estado

const appState = {
    page:null,  // pagina actual
    total:null, // total de paginas
    searchParameter: TRENDING
};

/*----------------------------------------------------------------------*/
/*-------------------------Mostrar Peliculas----------------------------*/
/*---------------------------------------------------------------------*/

/**
 * Función para mostrar las películas correspondientes en la página y setear el appState para la categoría que se haya seleccionado.
  1. Renderizamos el loader
  2. Hacemos la llamada a la API con la función fetchMovies y le pasamos como parámetro el searchParameter del appState.
  3. Seteamos el appState con el total de páginas y la página actual.
  4. Seteamos la paginación
  5. Renderizamos las cards con la función renderCards
 */

  const showMovies = async () => {
    cardsContainer.innerHTML=renderLoader();
    const movies= await fetchMovies(appState.searchParameter);
    appState.total= movies.total_pages;
    appState.page= movies.page;
    setPaginationState();
    renderCards(movies.results);
  }

/**
 * Función para renderizar el loader.
 * Este loader se muestra mientras se hace la llamada a la API y se renderizan las cards.
 * @returns {string}    String con el html del loader
 */

const renderLoader = () => {
  return`   
  <div class="lds-ring">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>`;
}

/**
 * Función para setear el estado actual de la páginación.
   1. Seteamos el número de página en el DOM
   2. Deshabilitamos el botón de volver atras en caso de que corresponda
   3. Deshabilitamos el botón de ir a la siguiente página en caso de que corresponda 
 */

   const setPaginationState = () => {
     pageNumber.innerHTML=appState.page;
     togglePreviousBtn(appState.page);
     toggleNextBtn(appState.page,appState.total);
   }

   /**
 * Función para deshabilitar el botón de volver atras en caso de que corresponda. Si estamos en la página 1, se inhabilita el botón. Este chequeo se realizará cada vez que se cambie de página.
 * @param {number} page Número de página actual.
 */

   const togglePreviousBtn = (page) => {
    if (page===1) {
        prevBTN.classList.add("disabled");
    } else {
        prevBTN.classList.remove("disabled");
    }
   };

   /**
 * Función para deshabilitar el botón de ir a la siguiente página en caso de que corresponda. Si estamos en la última página, se inhabilita el botón. Este chequeo se realizará cada vez que se cambie de página.
 * @param {number} page Número de página actual.
 * @param {number} total Número total de páginas.
 */

   const toggleNextBtn = (page,total) => {
    if(page===total) {
        nextBTN.classList.add("disabled");
    } else {
        nextBTN.classList.remove("disabled");
    }
     
   };

   /**
 * Función para crear el template html de una card
 * Usamos destructuring para obtener las propiedades que necesitamos del objeto movie
 * Usamos el operador ternario para mostrar una imagen por defecto en caso de que no venga una imagen en el objeto movie.
 * Usamos la función Math.floor para redondear el vote_average
 * Usamos la función formatDate para formatear la fecha
 * @param {objeto} movie Película que se va a renderizar
 * @returns {string} String con el html de la card
 */

   const createCardTemplate = (movie) => {
     const {title, poster_path, vote_average, release_date} = movie;
     return  ` 
     <div class="card">
     <img loading="lazy"  src=${
       poster_path ? ImgBaseUrl + poster_path : "./assets/img/placeholder.png"
     } alt="${title}}" class="card-img"/>
       <div class="card-popularity">
        ${formatVoteAverage(vote_average)}% de popularidad
       </div>
       <div class="card-content">
           <h2>${title}</h2>
           <p>Fecha de estreno: ${formatDate(release_date)}</p>
       </div>
       </div>
     `;
   };

   /**
 * Función para formatear el vote_average a un número entero entre 0 y 100
 * @param {number} voteAverage
 * @returns {number} Número entero entre 0 y 100
 */

const formatVoteAverage = (voteAverage) => {
  return  Math.floor(voteAverage *10);
};

/**
 * Función para formatear la fecha a dd/mm/yyyy
 * @param {string} date
 * @returns {string} Fecha formateada
 */


const formatDate = (date) => {
    const [year,month,day] = date.split("-")
    return `${day}/${month}/${year}`;
}

const renderCards =(movies) => {
  cardsContainer.innerHTML= movies
  .map(movie=> createCardTemplate(movie))
  .join("");
};

/*----------------------------------------------------------------------*/
/*--------------------------Cambiar Pagina-----------------------------*/
/*---------------------------------------------------------------------*/

/**
 * Función para cambiar de página hacia adelante. Si no es la última página, se aumenta el número de página en el estado y se hace la llamada a la API con changePage().
 */

const nextPage = () => {
  if(appState.page === appState.total) return;

  appState.page+=1;
  changePage();
}

/**
 * Función para cambiar de página hacia atrás. Si no es la primera página, se disminuye el número de página en el estado y se hace la llamada a la API con changePage().
 */

const previousPage = () => {
  if(appState.page===1) return;
  appState.page -=1;
  changePage();
};

/**
 * Función para cambiar de página. Se renderiza el loader, se hace la llamada a la API con fetchMovies(), se actualiza el estado de la paginación con setPaginationState() y se renderizan las cards con loadAndShow().
 */

const changePage = async () => {
  cardsContainer.innerHTML=renderLoader();
  const movies = await fetchMovies(appState.searchParameter,appState.page);
  setPaginationState();
  loadAndShow(movies);
}

/**
 * Función para renderizar las cards dando un efecto de carga,user setTimeout para simular el tiempo de carga.
 * @param {object[]} movies Array de películas
 */

const loadAndShow = (movies) => {
  setTimeout(() => {
    renderCards(movies.results);
    filterContainer.scrollIntoView({
      behavior:"smooth"
    })
  },1500);
}


/*----------------------------------------------------------------------*/
/*------------------------- Cambiar categoría --------------------------*/
/*---------------------------------------------------------------------*/

/**
 * Función para cambiar el parámetro de búsqueda para el estado de la página.
   1- Solo se ejecuta si el elemento clickeado es un botón de categoría y si no está activo.
   2- Se trae el data-filter del elemento apretado (revisar el html) y se setea el searchParameter del estado con el resultado de la función parameterSelector.
   3- Se llama a la función setActiveButton() para activar el botón clickeado y desactivar el resto.
   4- Se hará una nueva llamada a la API con showMovies(), basado en el nuevo searchParameter del estado de la página.
 * @param {event} e  
 */

   const changeSearchParameter = (e) => {
    console.log("click")
    if (!isActiveCategoryBtn(e.target)) return;
    const selectedParameter= e.target.dataset.filter;
    appState.searchParameter = parameterSelector(selectedParameter);
    setActiveButton(selectedParameter);
    showMovies();
   };

   /**
 * Función para verificar si el elemento clickeado es un botón de categoría y si está activo.
 * @param {object} btn elemento del dom clickeado
 * @returns
 */

   const isActiveCategoryBtn = (btn) => {
     return (
        btn.classList.contains("btn") && !btn.classList.contains("btn--active")
     );
   };

   /**
 * Función para seleccionar la categoría de búsqueda según el data-filter de los botones, que serán strings.
 * @param {string} filterType   Tipo de filtro seleccionado
 * @returns  parámetro de búsqueda según el filtro seleccionado
 */

   const parameterSelector= (filterType) => {
    return filterType === "TOPRATED" 
      ? TOPRATED 
      : filterType === "UPCOMING" 
      ? UPCOMING 
      : TRENDING;
     
   };

/**
 * Función para activar el botón clickeado y desactivar el resto.
 * Utilizamos el spread operator para convertir el NodeList en un array y poder usar el método forEach.
 * @param {string} selectedParameter parámetro de búsqueda seleccionado
 */

const setActiveButton = (selectedParameter) => {
  console.log(selectedParameter);
  const buttons= [...filterButtons];
  buttons.forEach((btn) => {
    if(btn.dataset.filter !== selectedParameter) {
      btn.classList.remove("btn--active");
    } else {
      btn.classList.add("btn--active")
    }
  })
  
}


const init = () => {
  window.addEventListener("DOMContentLoaded",showMovies);
  nextBTN.addEventListener("click",nextPage);
  prevBTN.addEventListener("click",previousPage);
  filterContainer.addEventListener("click", changeSearchParameter)
};

init()