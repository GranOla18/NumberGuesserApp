import { urls } from "../constants/constants";

export const useFetchPokemon = async ( dexNum ) => {
    // const resp2 = fetch(`${urls.pokemonPath}/${deluxe}`)
    const response = await fetch(`${urls.pokemonPath}/${dexNum}`)
    console.log('response', response)
    const data = await response.json()
    const { name, sprites : { front_default : img} } = data
    console.log('data', data);

    console.log('img', img);

    return [
        name,
        img
    ]

    //return data;
}