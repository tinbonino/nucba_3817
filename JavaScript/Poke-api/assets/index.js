const pokemonsContainer=document.querySelector("#caja");
const loader = document.querySelector(".pokeballs-container");

const appState= {
    currentURL: "https://pokeapi.co/api/v2/pokemon/?limit=8&offset=0",
    isFetching: false
};

/**
 * Función para hacer llamado a la api y retornar la data necesaria para empezar la aplicación.
 * NOTA: El peso y altura estan divididos por 10 para que se muestren correctamente en metros y kilos.
 * @param {object} pokemon  Objeto con la data de un pokemon
 * @returns {object} Objeto con la data de un pokemon, pero ya preparado con las propiedades que necesitamos para mostrar la card.
 */

const pokemonTemplate= (pokemon) => {
    return {
        id: pokemon.id,
        name: pokemon.name.toUpperCase(),
        image: pokemon.sprites.other.home.front_default,
        height: pokemon.height /10,
        weight: pokemon.weight /10,
        types: pokemon.types,
        experience: pokemon.base_experience
    };
  
};

/**
 * Función generadora del HTML de los tipos de un pokemon.
 * NOTA: types es un array de objetos, por lo que vamos a hacer un map para recorrerlo y mostrar los tipos que tiene el pokemon.
   Cada span de tipo va a tener una clase que depende del nombre del tipo que se este recorriendo en ese momento.
 * @param { object[] } types  Array con la data de los tipos de un pokemon
 * @returns {string} String con la estructura HTML de los tipos de un pokemon
 */

   const createTypeCards = (types) => {
    return types
        .map((tipo) => {
            return `<span class="${tipo.type.name} poke__type">${tipo.type.name}</span>`
          
        })
        .join("");
     
   }

   /**
 * Función para renderizar un pokemon en una card
 * NOTA I: Usamos destructuring para extraer lo que necesitamos del template que armamos en base a la data del pokemon que recibimos de la API.
 * @param {object} pokemon  Objeto con la data de un pokemon
 * @returns  {string}  String con la estructura HTML de la card del pokemon
 */

   const createPokemonCard = (pokemon) => {
    const {id,name,image,height,weight,types,experience}=pokemonTemplate(pokemon);
    
    return `
    <div class="poke">
        <img src="${image}">
        <h2>${name}</h2>
        <span class="exp">EXP:${experience}</span>
        <div class="tipo-poke">
            ${createTypeCards(types)}
        </div>
        <p class="id-poke">${id}</p>
        <p class="height">${height} Mts.</p>
        <p class="weight">${weight} Kgs.</p>
  </div>
    `
   }
   /**
 * Función para renderizar la lista de pokemones
 * @param {object[]} pokemonList Array con la data de los pokemones que se van a agregar al DOM.
 */

   const renderPokemonList = (pokemonList) => {
        pokemonsContainer.innerHTML+=pokemonList
            .map(pokemon=> createPokemonCard(pokemon))
            .join("");
 
   };

   /**
 *  Función para mostrar el loader y renderizar la lista de pokemones pasado determinado tiempo.
 * NOTA I: el tiempo es ficticio para que se vea el loader y darle una mejor presentación a la aplicación.
 * NOTA II: Acá es donde se vuelve el estado de isFetching a false una vez finalizado el renderizado del evento scroll, para que se pueda volver a hacer la llamada a la API.
 * @param {object[]} pokemonList  Array con la data de los pokemones que se van a agregar al DOM.
 */

   const renderOnScroll = (pokemonList) => {
    loader.classList.toggle("show");
    setTimeout(() => {
      loader.classList.toggle("show");
      renderPokemonList(pokemonList);
      appState.isFetching=false;
    },1500);
     
   };

   /**
 * Función para traerse la data de los siguientes 8 pokemones a renderizar.
 * NOTA I: La llamada a fetchPokemons recibe la url actualmente almacenada que nos trae la propiedad "next" para setear la proxima llamada y "results" que es un array con la url de llamada a la data individual de cada pókemon de la tanda actual.
 * NOTA II: Una vez que tenemos "next" y "results", seteamos la proxima url a la que se va a llamar al scrollear y hacemos un map para obtener la url de cada pokemon de la tanda actual, para luego con un Promise.all para traernos la data individual de cada pokemon. Usamos Promise.all para que se hagan las llamadas a la API de manera concurrente y no una por una, por una cuestion de eficiencia.
 * @returns {object[]} Array donde cada elemento será un objeto tendrá la data individual de cada pokemon que se va a renderizar en esta tanda.
 */

   const getPokemonsData = async () => {
     const {next,results} = await fetchPokemons(appState.currentURL);
     appState.currentURL=next;

     const pokemonDataUrls= results.map(pokemon=>pokemon.url);

     const pokemonData = await Promise.all(
        pokemonDataUrls.map(async (url) => {
          const nextPokemonData= await fetch(url);
          return await nextPokemonData.json();
        })
     );
     return pokemonData;
   }

   /**
 * Función para obtener la data de los pokemons a renderizar y renderizarlos en base a la función que se pase como parámetro.
 * @param {function} renderingFunction  Función que se va a encargar de renderizar la data de los pokemones.
 */
const loadAndRenderPokemons= async (renderingFunction) => {
  const pokemonsData = await getPokemonsData();
  renderingFunction(pokemonsData);
}

/**
 * Función para verificar si el scroll esta en el final de la página.
 
 * document.documentElement es el elemento raíz del documento HTML, es decir, el elemento html.
 
 * scrollTop: Es la altura total en pixeles que se ha scrolleado el elemento. (Mientras mas scroll hacía abajo, mayor es el valor de scrollTop)
 
 * clientHeight: Es la altura total del elemento. Al ser en este caso todo el html, es la altura total del viewport.

 * scrollHeight: Es la altura total del elemento, incluyendo el contenido que no se ve en el viewport pero que si se verá si scrolleamos.
 
 * Si la suma de lo que ya se ha scrolleado + la altura del elemento(en este caso el viewport) es mayor o igual a la altura total del elemento (incluyendo el contenido que no se ve en el viewport) menos 1 , entonces significa que estamos en el final de la página.

 * @returns {boolean} Retorna true si el scroll esta en el final de la página, false en caso contrario.
 */

const isEndOfPage = () => {
  const {scrollTop,clientHeight,scrollHeight}=document.documentElement;
  const bottom = scrollTop+clientHeight>= scrollHeight-1;
  return bottom; //puede ser true or false
}

/**
 * Función para verificar si el scroll esta en el final de la página y si no se esta haciendo una llamada a la API. En caso de que se cumplan ambas condiciones, se llama a la función loadAndRenderPokemons con la función renderOnScroll como parámetro porque será ese el método elegido para renderizar.
 */

const loadNextPokemons = async () => {
  if(isEndOfPage() && !appState.isFetching) {
    appState.isFetching= true;
    loadAndRenderPokemons(renderOnScroll);
  }
}

/**
 * Función inicializadora de la aplicación. La misma contendrá los listeners de los eventos de Carga del DOM y de scroll.
 */

function init() {
    window.addEventListener("DOMContentLoaded",async () => {
      await loadAndRenderPokemons(renderPokemonList);
    });

    window.addEventListener("scroll", async () => {
      await loadNextPokemons();
    })
}

init();