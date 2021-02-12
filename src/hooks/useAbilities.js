import { useEffect, useState } from "react";
import { initialAbility } from "../initalState";
import { getAbilityByName } from "../services/getAbilityByName";

export const useAbilities = (props) => {
    const [ability, setAbility] = useState(initialAbility);
    const { effects, pokemons } = ability;

    useEffect(async () => {
        const pokemonAbility = await getAbilityByName(props.name);
        setAbility(pokemonAbility);
    }, []);

    return {ability, effects,pokemons}
}