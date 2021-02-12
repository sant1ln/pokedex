import axios from "axios"

export const getBasicPokemonsById = async(URL) =>{
    const response = await axios.get(URL)
    const data = await response.data
    const {name,id,sprites:{front_default}} = data
    const pokemon =[ {name,id,front_default}]
    return pokemon
    
}