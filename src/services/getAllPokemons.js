import axios from "axios"

export const getAllPokemons = async() =>{
    const URL = 'https://pokeapi.co/api/v2/pokemon/'
    const response = await axios.get(URL)
    const data = await response.data
    const pokemons =  data.results
    return  pokemons
}
