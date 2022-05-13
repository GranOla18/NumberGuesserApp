import React, {useState, useRef, useEffect} from 'react'
import { Button, StyleSheet, Text, TextInput, View, Alert } from "react-native";
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import PokeInfo from '../components/PokeInfo';
import Colors from '../constants/Colors';

//De los ahora varios objetos solo trae direction
import { direction_ as d} from '../constants/constants';

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
  
  
  const GameScreen = ({selectedNumber, onGameOver}) => {
    
    const currentLow = useRef(1);
    const currentHigh = useRef(899);
    //generateRandomBetween(currentLow.current, currentHigh.current, selectedNumber
    //const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, selectedNumber));
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(currentLow.current, currentHigh.current, selectedNumber));
    
    //Se pone por defecto en 0
    const [rounds, setRounds] = useState(0)
    
    const [pokeInfo, setPokeInfo] = useState(undefined)
    
    useEffect(() => {
      if(currentGuess === selectedNumber) {
        onGameOver(rounds, currentGuess)
      }
    }, [currentGuess])

    useEffect(() => {
      if(currentGuess){
        setPokeInfo(<PokeInfo>{currentGuess}</PokeInfo>)
      }
    }, [currentGuess])
    
    

    console.log(currentGuess);

    const nextGuess = direction => {
      if( (direction === d.higher && currentGuess > selectedNumber ) ||
      (direction === d.lower && currentGuess < selectedNumber)) {
          //Esto solo funciona en Android
          // Alert('Pls don\t lie', 'You know that\'s wrong', [{text: 'Sorry', style: 'cancel'}])
          alert('Pls do not lie')
          return
      }

      if(direction === d.lower) {
        currentHigh.current = currentGuess;
      } else {
        currentLow.current = currentGuess;
      }

      //const nextNum = generateRandomBetween(1, 100, selectedNumber);
      const nextNum = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
      setRounds(currentRounds => setRounds(currentRounds + 1))
      setCurrentGuess(nextNum);

      // if(nextNum === selectedNumber) {
      //   alert('You won!!!')
      // }
    }

  return (
    <View style={styles.screen}>
      <Text>Computer Guess: </Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
          <Button title='Lower' color={Colors.secondary} onPress={ () => {nextGuess(d.lower)} } />
          <Button title='Higher' color={Colors.primary} onPress={ () => {nextGuess(d.higher)} } />
      </Card>
      <Card>
        {pokeInfo}
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