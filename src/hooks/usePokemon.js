import { useEffect, useState } from "react";
import { initialPokemon } from "../initalState";
import { getPokemonsById } from "../services/getPokemonById";

export const usePokemon = (props) => {
    const [dataPokemon, setDataPokemon] = useState(initialPokemon);
    const { abilities, name, big_img, weight, height, types } = dataPokemon;
    useEffect(async () => {
        const URL = `https://pokeapi.co/api/v2/pokemon/${props.id}/`;
        let Pokemon = await getPokemonsById(URL);
        setDataPokemon(Pokemon);
    }, []);

    return {dataPokemon,abilities, name, big_img, weight, height, types}
}