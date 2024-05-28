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
    page:null, 
    total:null, 
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


const init = () => {
  window.addEventListener("DOMContentLoaded",showMovies);
};

init()