import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Card from '../components/Card';
import Colors from '../constants/Colors';

const GameOverScreen = ({rounds}) => {
  return (
      <View style={styles.screen}>
          <Card style={styles.gameOverBox}>
            <Text style={styles.gameOverMsg}>The game is over!!</Text>
            <Text>Took you: {rounds} rounds</Text>
          </Card>
      </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    gameOverMsg: {
        fontSize: 22,
        color: Colors.primary,
    },
    gameOverBox: {
        shadowColor: Colors.secondary,
    },
})

export default GameOverScreen