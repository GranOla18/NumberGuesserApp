import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import Colors from '../constants/Colors';
import { useFetchPokemon } from '../hooks/useFetchPokemon';

const PokeInfo = (props) => {

    const [puchamon, setPuchamon] = useState({name:'', img:''})

    useEffect(() => {
        if(props.children != 0) {
            console.log('props', props.children)
            setPokemonInfo()
        }    
        console.log('cola')
    }, [props.children])

    const setPokemonInfo = async () => {
        const number = props;
        const [name, img] = await useFetchPokemon(props.children);
        setPuchamon({name: name, img: img})
    }
     
    return (
        <View>
            <Text style={styles.pokeName}>{puchamon.name}</Text>
            <Image style={styles.pokemonImg} source={{uri: puchamon.img}}/>
        </View>
  )
}

const styles = StyleSheet.create({
    pokeName: {
        fontSize: 20,
        color: Colors.secondary,
        marginTop: 15,
        fontWeight: "bold",
        textAlign: 'center',
        textTransform: 'capitalize',
    },
    pokemonImg: {
      width: 150,
      height: 150,
    },

})

export default PokeInfo