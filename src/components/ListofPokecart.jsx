import React, { useEffect, useState } from "react";
import { getPokemonsById } from "../services/getPokemonById";
import "./styles/list_of_pokecart.css";
import { Pokecart } from "./Pokecart";
export const ListofPokecart = (url) => {
  const { url: urlParsed } = url;
  const [pokemon, setPokemons] = useState([]);

  useEffect(async () => {
    let Pokemon = await getPokemonsById(urlParsed);
    
    setPokemons(Pokemon);
  }, []);
  return (
    <div className="pokecart_list_container">
        {pokemon.map((cart) => (
        
          <Pokecart key={cart.id}
          id={cart.id} 
          img={cart.front_default}
          name={cart.name} />
       
        ))}
    </div>
  );
};
