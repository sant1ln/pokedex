import React  from "react";
import { Helmet } from "react-helmet";
import { ListofPokecart } from "../components/ListofPokecart";
import { useTypes } from "../hooks/useTypes";
import "./styles/types.css";

export const Types = (props) => {
  
  const{damageFrom, damageTo, pokemons,handleType} = useTypes(props)
  
  return (
    <div className="types_container">
      <Helmet>
        <title>Pokedex | {props.type.toUpperCase()}</title>
      </Helmet>
 
      <h2 className="types_container-name">{props.type}</h2>
      <div className="damage_container" >
        <div className="types_contianer_damage from">
          <div className="type weak">
            <h3>Weak against</h3> 
          </div>
          {damageFrom.map(({name}) => (
           <p onClick={()=>handleType(name)} key={name}>{name}</p>
          ))}
        </div>
        <div className="types_contianer_damage to">
          <div className="type strong">
            <h3>Strong against</h3> 
          </div>
          {damageTo.map(({name}) => (
           <p onClick={()=>handleType(name)} key={name}>{name}</p>
          ))}
        </div>
      </div>
      <div className="pokemons_ability">
        <h2 className="abilities_container-name">
          Pokemons with the same type
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
