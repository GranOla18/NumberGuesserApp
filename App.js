import {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  
  const [selectedNumber, setSelectedNumber] = useState(undefined)

  const startGameHandler = (number) => {
    console.log(number)
    setSelectedNumber(number);
  }

  let content = selectedNumber ?
    <GameScreen selectedNumber={selectedNumber} /> :
    <StartGameScreen onStartGame={startGameHandler} />

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
});