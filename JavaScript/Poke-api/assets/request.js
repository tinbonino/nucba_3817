/**
 * Función para hacer llamado a la api y retornar la data necesaria para empezar la aplicación.
 * @param {string} url - URL correspondiente a la llamada de la tanda de pokemons que se quiere renderizar.
 * @returns {object} - Objeto con los enlaces para los primeros 8 pokemons y la url para los siguientes 8.
 */

const fetchPokemons = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

