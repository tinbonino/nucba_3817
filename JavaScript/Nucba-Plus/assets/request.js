const KEY = "b3272e25ac5759d642ff81bf945da1f7";
const TRENDING = `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}&language=en-US`;
const TOPRATED = `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=en-US`;
const UPCOMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY}&language=en-US`;

/**
 * Función para hacer la llamada a la API
 * @param {string} searchTerm   URL de la API que queremos usar
 * @param {number} page        número de página que queremos traernos. En caso de no pasarle un número, se tomará la 1 por defecto
 * @returns {object}           objeto con los datos de la API
 */

const fetchMovies = async (searchTerm, page=1) => {
  const response= await fetch(searchTerm+ `&page=${page}`);
  const data = await response.json();
  return data;
}