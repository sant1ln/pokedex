import React, { useEffect, useState } from "react";
import "./styles/list_of_pokecart.css";
import { Pokecart } from "./Pokecart";
import { getBasicPokemonsById } from "../services/getBasicPokemonbyId";

export const ListofPokecart = (url) => {
  
  const { url: urlParsed } = url;
  const [pokemon, setPokemons] = useState([]);

  useEffect(async () => {
    let Pokemon = await getBasicPokemonsById(urlParsed)
    
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
