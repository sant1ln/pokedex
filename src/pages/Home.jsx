import React, { useEffect, useState } from 'react'
import { ListofPokecart } from '../components/ListofPokecart'
import { getAllPokemons } from '../services/getAllPokemons'

import './styles/home.css'
export const Home = () => {
    const [listPokemons, setListPokemons] = useState([])
        
    useEffect(async() => {
        let Pokemons = await getAllPokemons()
        setListPokemons(Pokemons)
       
    }, [])
    return (
        <div className="pokecarts_containar">
            <h2>Pokemons!!</h2>
            <div className="pokecarts_list">
            {
                listPokemons.map(item=>(
                  <ListofPokecart key={item.name} 
                  url={item.url}/>
                ))
            }
            </div>
        </div>
    )
}
