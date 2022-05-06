import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Card from "../components/Card";
import Colors from "../constants/Colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
 
 const StartGameScreen = ({ onStartGame}) => {
    //useStateSnippet
    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState(undefined)

    const numberInputHandler = input => {
        //Todo lo que no sea un 0 o un 9 reemplazalo por un '' 
        setEnteredValue(input.replace(/[^0-9]/g, ''));
    }

    const resetInputHandler = () => {
        //Lo que esta en enter value hazlo una cadena vacia
        setEnteredValue('')
        //Y no esta confirmado
        setConfirmed(false)
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        //is Not a Number
        //Solo acepta numeros positivos menores a 99
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) return
        setConfirmed(true)
        setSelectedNumber(chosenNumber)
        setEnteredValue('')
    }

    let confirmedOutput;

    //Siempre que se renderee el compoennte se va a ejecutar esta linea
    if(confirmed) {
        confirmedOutput = (
            <Card>
                <Text>You selected:</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button
                    title='Ready to start game?'
                    onPress={ () => onStartGame(selectedNumber) }
                />
            </Card>
        )
    }

    return (
     <View style={styles.screen}>
        <Card>
            <Text style={styles.title}>Select a Number</Text>
            <Input
                style={styles.input}
                blurOnSubmit //Android
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType="number-pad"
                maxLenght={2}
                onChangeText={numberInputHandler}
                value={enteredValue}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button 
                        style={styles.button}
                        title="Reset"
                        color={Colors.secondary}
                        onPress={resetInputHandler}
                    />
                </View>
                <View style={styles.button}>
                    <Button 
                        style={styles.button}
                        title="Confirm"
                        color={Colors.primary}
                        onPress={confirmInputHandler}
                    />  
                </View> 
            </View>
        </Card>
        {confirmedOutput}
     </View>
   )
 }

 const styles = StyleSheet.create({
     selectedContainer: {
         marginTop: 20,
         alignItems: 'center',
         justifyContent: 'center'
     },
     screen: {
         flex: 1,
         padding: 10,
         alignItems: 'center'
     },
     title: {
         fontSize: 20,
         marginVertical: 10,
     },
     button:{
         with: 100,
     },
     buttonContainer:{
         flexDirection: 'row',
         width: '100%',
         justifyContent: 'space-between',
         paddingHorizontal: 15,
     },
     input: {
         width: 50,
         textAlign: 'center'
     }

 })

 export default StartGameScreen;