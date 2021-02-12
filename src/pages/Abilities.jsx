import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { ListofPokecart } from "../components/ListofPokecart";
import { initialAbility } from "../initalState";
import { getAbilityByName } from "../services/getAbilityByName";
import "./styles/abilities.css";

export const Abilities = (props) => {
  const [ability, setAbility] = useState(initialAbility);
  const { effects, pokemons } = ability;

  useEffect(async () => {
    const pokemonAbility = await getAbilityByName(props.name);
    setAbility(pokemonAbility);
  }, []);
  console.log(ability);
  return (
    <div className="abilities_container">
      <Helmet>
        <title>Pokedex | {props.name}</title>
      </Helmet>
      <h2 className="abilities_container-name">{props.name}</h2>
      <div className="effects_container">
        {effects.map((item) => (
          <div className="effect_container-card" key={item.effect}>
            <h3>Effect</h3>
            <hr />
            <p>{item.effect}</p>
            <hr />
            <h5>Short Effect</h5>
            <p>{item.short_effect}</p>
          </div>
        ))}
      </div>
      <div className="pokemons_ability">
        <h2 className="abilities_container-name">
          Pokemons with the same ability
        </h2>
        <div className="pokecarts_list">
          {pokemons.map(({pokemon}) => (
            <ListofPokecart key={pokemon.name} url={pokemon.url} />
          ))}
        </div>
      </div>
    </div>
  );
};
