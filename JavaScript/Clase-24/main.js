//fetch
let contenedor=document.querySelector(".contenedor");

let pokemon=prompt("Ingrese el numero o nombre de pokemon deseado")

// fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
// .then(response => response.json())
// .then(data => contenedor.innerHTML=`
//<h2>${data.name}</h2>
//<img src="${data.sprites.other.dream_world.front_default}">

// `
//     // return console.log("Su nombres es",data.name)
//     // return console.log(data)
// )
// .catch(error=>console.log("Hubo un error en la peticion:",error))

const getPokemon= async () => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data= await response.json();
    // console.log(`${data.name} es de tipo ${data.types[0].type.name} y ${data.types[1].type.name}`)
    
    return data;
  } catch (error){
    console.error(error)
  }
}

// getPokemon();

const templatePokemon = pokemon =>{
    const {name, sprites,types} = pokemon;
    const pokemonHTML=`
    <div class="card">
    <img src="${sprites.front_default}" alt="${name}" />
    <h2>${name}</h2>
    
    </div>
    `;
    contenedor.innerHTML+=pokemonHTML;
}

const renderPokemon = async () => {

    try {
        const pokemon = await getPokemon();
        templatePokemon(pokemon)

    } catch (error) {
        console.error(error)
    }
  
};

renderPokemon();