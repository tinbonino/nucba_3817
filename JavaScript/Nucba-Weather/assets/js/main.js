// Traemos los elementos HTML que necesitamos

const form=document.querySelector("#form");
const cityInput=document.querySelector(".search-input");
const cardContainer=document.querySelector(".card-container");
const searchMsg=document.querySelector(".search-msg");


/**
 * Función que redondea un número a su entero más cercano.
 * @param {number} number Número que se quiere redondear
 * @returns {number} Número redondeado
 */

const roundNumber= (number) => {
  return Math.round(number);
};

/**
 * Función que simplifica la data de la ciudad para su uso en la función de creación de la card de clima, haciendola mas legible.
 * @param {object} cityData Objeto con la data de la ciudad
 * @returns {object} Objeto con la data de la ciudad simplificada para su uso en la app.
 */

const getCityData = (cityData) => {

    return {
        cityName: cityData.name,
        imageName:cityData.weather[0].icon,
        cityWeatherInfo: cityData.weather[0].description,
        cityTemp: roundNumber(cityData.main.temp),
        cityST: roundNumber(cityData.main.feels_like),
        cityMaxTemp: roundNumber(cityData.main.temp_max),
        cityMinTemp: roundNumber(cityData.main.temp_min),
        cityHumidity: cityData.main.humidity
    };
  
};

const createCityTemplate = (cityData) => {
    
    const {
        cityName,
        imageName,
        cityWeatherInfo,
        cityTemp,
        cityST,
        cityMaxTemp,
        cityMinTemp,
        cityHumidity
    } = getCityData(cityData);

    return `
            <div class="weather-card animate">
                <div class="weather-info-container">
                    <h2 class="weather-title">${cityName}</h2>
                    <p class="weather-description">${cityWeatherInfo}</p>
                    <div class="weather-temp-container">
                        <span class="weather-temp">${cityTemp}°</span>
                        <span class="weather-st">${cityST}ST</span>
                    </div>
                </div>
                <div class="weather-img-container">
                    <img src="./assets/img/${imageName}.png" alt="weather image" />
                </div>
                <div class="weather-extra-container">
                    <div class="weather-minmax-container">
                        <span class="weather-span"><i class="fa-solid fa-arrow-up-long"></i>${cityMaxTemp}º</span>
                        <span class="weather-span"><i class="fa-solid fa-arrow-down-long"></i>${cityMinTemp}º</span>
            </div>
            <span class="weather-humidity">${cityHumidity}%</span>
            </div>
        </div>
    
    `;

};

/**
 * Función para renderizar la card de la ciudad.
 * @param {object} cityData Objeto con la data de la ciudad
 */

const renderCityCard= (cityData) => {
    cardContainer.innerHTML=createCityTemplate(cityData);
  
}

/**
 * Función para cambiar el mensaje de busqueda de la ciudad una vez que se haya realizado la busqueda.
 * @param {object} cityData Objeto con la data de la ciudad
 */

const changeSearchMsg = (cityData) => {

    const cityName=cityData.name;
    searchMsg.innerHTML= `Así está el clima en ${cityName}, ¿Querés ver el clima de otra ciudad?`
  
};

/**
 *
 * @returns {boolean} Retorna true si el input de la ciudad esta vacio, false si no lo esta.
 */

const isEmptyInput = () => {
  return cityInput.value.trim()==="";
};

/**
 *
 * @param {object} cityData Objeto con la data de la ciudad u objecto de error si no encontró la ciudad.
 * @returns
 */

const isInvalidCity = (cityData) => {
    console.log(cityData.id);
  return !cityData.id;
};

/**
 * Función que realizará la busqueda y renderizado de la ciudad buscada o el mensaje de error correspondiente.
 * @param {event} e Recibe un evento, en este caso el submit del formulario.
 */

const searchCity = async (e) => {
  e.preventDefault();

    if (isEmptyInput()){
        alert("Por favor ingrese una ciudad");
        return;
    }

    const fetchedCity = await requestCity(cityInput.value);

    if(isInvalidCity(fetchedCity)){
        alert("La ciudad ingresada no existe");
        form.reset();
        return;
    }

    renderCityCard(fetchedCity);
    changeSearchMsg(fetchedCity);
    form.reset();

};

const init = () => {
  form.addEventListener("submit",searchCity);
}

init();