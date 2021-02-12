import React, { useEffect, useState } from "react";
import { initialState } from "../initalState";
import { getPokemonsById } from "../services/getPokemonById";

import "./styles/pokemon.css";

export const Pokemon = (props) => {
  const [dataPokemon, setDataPokemon] = useState(initialState);
  const {abilities,name,id,big_img,weight,height,types} = dataPokemon
  useEffect(async () => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${props.id}/`;
    let Pokemon = await getPokemonsById(URL);
    setDataPokemon(Pokemon);
  }, []);

  return (
    <div className="datapokemon_container">
      {dataPokemon ? (
        <div className="datapokemon">
          <div className="datapokemon-image">
            <img src={big_img} className="image" />
          </div>
          <div className="datapokemon-info">
            <div className="datapokemon-info-name">
              <h2>{name}</h2>
            </div>
            <div className="datapokemon-info-abilities">
              <h3>Abilities</h3>
              {abilities.map(({ ability }) => (
                <div className="datapokemon-info-ability" key={ability.name}>
                  <h4>{ability.name}</h4>
                </div>
              ))}
            </div>
            <div className="datapokemon-info-abilities">
              <h3>Types</h3>
              {types.map(({ type }) => (
                <div className="datapokemon-info-ability" key={type.name}>
                  <h4>{type.name}</h4>
                </div>
              ))}
            </div>
            <div className="datapokemon-info-others line">
              <h3>Height</h3>
              <p>{height}mts</p>
            </div>
            <div className="datapokemon-info-others">
              <h3>Weight</h3>
              <p>{weight}kgs</p>
            </div>
          </div>
        </div>
      ) : (
        <h1>Empty :c</h1>
      )}
    </div>
  );
};
