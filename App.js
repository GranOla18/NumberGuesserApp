import {useState} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/Colors';

export default function App() {
  
  const [selectedNumber, setSelectedNumber] = useState(undefined);
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [numberGuessed, setnumberGuessed] = useState(undefined);

  const gameOverHandler = (rounds, numberGuessed) => {
    setNumberOfGuesses(rounds);
    setnumberGuessed(numberGuessed);
  }

  const restartGame = () => {
    console.log("Restart");
    setSelectedNumber(undefined);
    setNumberOfGuesses(0);
  }

  const startGameHandler = (number) => {
    console.log(number)
    setSelectedNumber(number);
  }

  let content = <StartGameScreen onStartGame={startGameHandler}/>;

  if( selectedNumber && numberOfGuesses === 0 ) {
    content = <GameScreen selectedNumber={selectedNumber} onGameOver={gameOverHandler} />
  } else if ( selectedNumber && numberOfGuesses > 0 ) {
    content = <GameOverScreen rounds={numberOfGuesses} numberGuessed={numberGuessed} onRestartGame={restartGame}/>
  }
    
  // let content = </*StartGameScreen onStartGame = {startGameHandler}/>
  // //Si es undefines == False
  // Si es cualquier cosa diferente a undefined == True
  // selected
  // if ( selectedNumber !== undefined && selectedNumber !== null ) {
  //   content = <GameScreen/>
  // }

  
  return (
    <View style={styles.screen}>
      <Header title={"Guess the Number"} />
      {content}
      {/*selectedNumber === undefined && <StartGameScreen/>}
      {selectedNumber !== undefined && <GameScreen/>*/}
    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'column',
    flex: 1
  },
  button:{
    with: 100,
},
});