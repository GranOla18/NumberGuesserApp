import React, {useState, useEffect} from 'react'
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Card from '../components/Card';
import PokeInfo from '../components/PokeInfo';
import Colors from '../constants/Colors';

const GameOverScreen = ({rounds, numberGuessed, onRestartGame}) => {

    const [pokeInfo, setPokeInfo] = useState(undefined)

    useEffect(() => {
        if(numberGuessed){
          setPokeInfo(<PokeInfo>{numberGuessed}</PokeInfo>)
        }
      }, [])

    return (
        <View style={styles.screen}>
            <Card style={styles.gameOverBox}>
                <Text style={styles.gameOverTitle}>The game is over!!</Text>
                <Text>The number guessed is:</Text>
                <Text style={styles.gameOverMsg}>{numberGuessed}</Text>
                <Text>Took you: {rounds} rounds</Text>
            </Card>
            <Card style={styles.gameOverFinalBox}>
                {pokeInfo}
            </Card>
            <Button
                    title="Restart Game"
                    color={Colors.secondary}
                    onPress ={() => {onRestartGame()}}
                />
        </View>
        )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    gameOverTitle: {
        fontSize: 26,
        color: Colors.secondary,
        margin: 15,
        textAlign: 'center',
    },
    gameOverMsg: {
        fontSize: 22,
        color: Colors.primary,
        margin: 10,
    },
    gameOverBox: {
        shadowColor: Colors.tertiary,
    },
    gameOverFinalBox: {
        shadowColor: Colors.tertiary,
        marginBottom: 20,
    },
})

export default GameOverScreen