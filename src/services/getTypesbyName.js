import axios from "axios"

export const getTypesByName = async(type) =>{
    const URL = `https://pokeapi.co/api/v2/type/${type}`
    const response = await axios.get(URL)
    const {damage_relations,pokemon:pokemons} = response.data
    const {double_damage_from:damageFrom,double_damage_to:damageTo} = damage_relations
    const types = {damageFrom,damageTo,pokemons}
    return types
}