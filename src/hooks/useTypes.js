import { useEffect, useState } from "react";
import { initalTypes } from "../initalState";
import { getTypesByName } from "../services/getTypesbyName";

export const useTypes = (props) => {
    const [types, setTypes] = useState(initalTypes);
    const { damageFrom, damageTo, pokemons } = types;

    useEffect(async () => {
        const TYPES = await getTypesByName(props.type);
        setTypes(TYPES);
    }, []);

    const handleType = (name) => {
        window.location.assign(`http://localhost:3000/type/${name}`)
    }

    return {types, damageFrom, damageTo, pokemons,handleType}
}