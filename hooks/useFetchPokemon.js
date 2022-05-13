import { urls } from "../constants/constants";

export const useFetchPokemon = async ( dexNum ) => {
    // const resp2 = fetch(`${urls.pokemonPath}/${deluxe}`)
    const response = await fetch(`${urls.pokemonPath}/${dexNum}`)
    console.log('response', response)
    const data = await response.json()
    const { name, sprites : { front_default : img}, types: { 0 : { type: {name : type} } } } = data
    console.log('data', data);

    console.log('img', img);
    console.log('type', type);


    return [
        name,
        img,
        type
    ]

    //return data;
}