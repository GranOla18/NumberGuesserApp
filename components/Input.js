import React from 'react'
import { StyleSheet, TextInput } from "react-native";

const Input = (props) => {
  return <TextInput
        //Todos los props que se pasen, ponlos aqui
        {...props}
        style={[styles.input, props.style]}
    />
}

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        marginVertical: 10,
        borderBottomWidth: 1,
    }
})

export default Input