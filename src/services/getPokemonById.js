import axios from "axios"

export const getPokemonsById = async(URL) =>{
    const response = await axios.get(URL)
    const data = await response.data
    const {abilities,name,id,sprites:{front_default,other},weight,height} = data
    const {dream_world:{front_default:big_img}} = other
    const pokemon =[ {abilities,name,id,front_default,big_img,weight,height}]
    return pokemon
    
}