import axios from "axios"

export const getAbilityByName = async(id) =>{
    const URL = `https://pokeapi.co/api/v2/ability/${id}/`
    const response = await axios.get(URL)
    const {effect_entries:effects,pokemon:pokemons} = response.data
    const abilites = {effects,pokemons}
    return abilites
}