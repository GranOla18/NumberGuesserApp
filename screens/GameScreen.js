import React, {useState, useRef} from 'react'
import { Button, StyleSheet, Text, TextInput, View, Alert } from "react-native";
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';

import Constants from '../constants/constants';

// const generateRandomBetween = ( min, max, exclude ) => {
//     min = Math.ceil(min);
//     max = Math.floor(max);

//     //Nos devolvera un numero al azar entre 0 y 1
//     const randNum = Math.random() * (max - min) + min;
//     const randNumFloored = Math.floor(randNum);

//     if(randNum === exclude) {
//         return generateRandomBetween(min, max, exclude);
//     } else {
//         randNumFloored;
//     }
// }

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
  
    console.log('min, max', min, max)
  
    const randNum = Math.random() * (max - min) + min;
    const randNumFloored = Math.floor(randNum);
  
    if (randNumFloored === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return randNumFloored;
    }
  }
  

const GameScreen = ({selectedNumber}) => {

    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    //generateRandomBetween(currentLow.current, currentHigh.current, selectedNumber
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, selectedNumber));

    console.log(currentGuess);

    const nextGuess = direction => {
        if( (direction === Constants.direction.higher && currentGuess < selectedNumber ) ||
        (direction === Constants.direction.lower && currentGuess < selectedNumber)) {
            //Esto solo funciona en Android
            // Alert('Pls don\t lie', 'You know that\'s wrong', [{text: 'Sorry', style: 'cancel'}])
            alert('Pls don\t lie')
            return
        } 
    }

  return (
    <View style={styles.screen}>
      <Text>Computer Guess: </Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
          <Button title='Lower' onPress={ () => {nextGuess(Constants.direction.lower)} } />
          <Button title='Higher' onPress={ () => {nextGuess(Constants.direction.higher)} } />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
      flex: 1,
      padding: 10,
      alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  }
})

export default GameScreen