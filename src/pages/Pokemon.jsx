import React from "react";
import { Link } from "@reach/router";
import { Helmet } from "react-helmet";
import { usePokemon } from "../hooks/usePokemon";
import { Loading } from "../components/Loading";
import "./styles/pokemon.css";
import 'animate.css'

export const Pokemon = (props) => {
  
  const {dataPokemon,abilities, name, big_img, weight, height, types} = usePokemon(props)

  return (
    <div className="datapokemon_container">
      <Helmet>
        <title>Pokedex | {name.toUpperCase()}</title>
      </Helmet>
      {dataPokemon ? (
        <div className="datapokemon animate__animated animate__fadeInUp">
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
                  <Link to={`/ability/${ability.name}`}>
                    <h4>{ability.name}</h4>
                  </Link>
                </div>
              ))}
            </div>
            <div className="datapokemon-info-abilities">
              <h3>Types</h3>
              {types.map(({ type }) => (
                <div className="datapokemon-info-ability" key={type.name}>
                  <Link to={`/type/${type.name}`}>
                    <h4>{type.name}</h4>
                  </Link>
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
      ) :<Loading />
      }
    </div>
  );
};
