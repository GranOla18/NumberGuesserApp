import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import Colors from '../constants/Colors';
import { useFetchPokemon } from '../hooks/useFetchPokemon';

const PokeInfo = (props) => {

    const [pokemon, setPokemon] = useState({name:'', img:'', type:''})

    useEffect(() => {
        if(props.children != 0) {
            console.log('props', props.children)
            setPokemonInfo()
        }    
        console.log('cola')
    }, [props.children])

    const setPokemonInfo = async () => {
        const [name, img, type] = await useFetchPokemon(props.children);
        setPokemon({name: name, img: img, type: type})
    }
     
    return (
        <View style={styles.pokeContainer}>
            <Text style={styles.pokeName}>{pokemon.name}</Text>
            <Text style={styles.pokeType}>Type: {pokemon.type}</Text>
            <Image style={styles.pokemonImg} source={{uri: pokemon.img}}/>
        </View>
  )
}

const styles = StyleSheet.create({
    pokeContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    pokeName: {
        fontSize: 20,
        color: Colors.secondary,
        marginTop: 15,
        fontWeight: "bold",
        textAlign: 'center',
        textTransform: 'capitalize',
    },
    pokeType: {
        fontSize: 14,
        color: Colors.tertiary,
        marginTop: 5,
        fontStyle: 'italic',
        textAlign: 'center',
        textTransform: 'capitalize',
    },
    pokemonImg: {
      width: 150,
      height: 150,
    },

})

export default PokeInfo