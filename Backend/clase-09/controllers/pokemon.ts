import { Request,Response } from "express";

import axios from "axios";

import { Pokemon,MultiplePokemonObject } from "../interfaces/pokemon";

export const getPokemonById = async (req:Request,res:Response) => {

    const {id}=req.params;

    console.log("Enviando datos a la PokeApi");

    const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);

    res.json(
        {
            mensaje:"Hola chicos",
            data
        }
    )
    console.log("Respuesta enviada al front")
  
}

export const getSimplePokemonById = async (req:Request,res:Response) => {

    const {id}= req.params;
    console.log("Petición enviada a la PokeApi");

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);

    const {name,order,sprites,abilities,types}:Pokemon=response.data;

    const bestImg = sprites.other?.dream_world.front_default;

    const simplePokemon = {
        name,
        abilities,
        bestImg,
        order,
        types
    }

    res.json(
        {
            simplePokemon
        }
    )
    console.log("Respuesta enviada")
}

export const getMultiplePokemon = async (req:Request,res:Response) => {
  const {limit=5,offset=0} = req.query;

  console.log(limit)
  console.log(offset)

  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`);

  const pokemonDataUrls: string[] = response.data.results.map((pokemon:MultiplePokemonObject)=>pokemon.url)

  const finalPokemonData = await Promise.all(
    pokemonDataUrls.map(async (url:string)=>{
        const pokemonData=await axios.get(url);
        return pokemonData.data
    })
  )

  res.json({
    finalPokemonData
  })

}
