import React, { useEffect, useState } from "react";
import { getPokemonsById } from "../services/getPokemonById";
import "./styles/pokemon.css";
export const Pokemon = (props) => {
  const [dataPokemon, setDataPokemon] = useState({
    abilities: [],
  });
  useEffect(async () => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${props.id}/`;
    let [Pokemon] = await getPokemonsById(URL);
    setDataPokemon(Pokemon);
  }, []);
  return (
    <div className="datapokemon_container">
      {dataPokemon ? (
        <div className="datapokemon">
          <div className="datapokemon-image">
            <img src={dataPokemon.big_img} className="image" />
          </div>
          <div className="datapokemon-info">
            <div className="datapokemon-info-name">
              <h2>{dataPokemon.name}</h2>
            </div>
            <div className="datapokemon-info-abilities">
              <h3>Abilities</h3>
              {dataPokemon.abilities.map(({ ability }) => (
                <div className="datapokemon-info-ability" key={ability.name}>
                  <h4>{ability.name}</h4>
                </div>
              ))}
            </div>
            <div className="datapokemon-info-others">
              <h3>Height</h3>
              <p>{dataPokemon.height}mts</p>
            </div>
            <div className="datapokemon-info-others">
              <h3>Weight</h3>
              <p>{dataPokemon.weight}kgs</p>
            </div>
          </div>
        </div>
      ) : (
        <h1>Empty :c</h1>
      )}
    </div>
  );
};
