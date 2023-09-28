import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

const Game = ({ handleCurrentPage, handleUserInfo, randomNumber, generateNum, resetNum}) => {
    const [userGuess, setUserGuess] = useState("");
    const [currentState, setCurrentState] = useState("inProgress");
    const [count, setCount] = useState(0);

    
    function onLogOut() {
        handleCurrentPage("Start");
        handleUserInfo({});
        resetNum();

    }
  
    function onReset() {
        setUserGuess("");
    }
    function onConfirm() {
        setCount(count+1);
        if (userGuess == randomNumber) {
            setCurrentState("correct");
        }else{
            setCurrentState("inCorrect");
        }

    }
    function onTryAgain() {
        setCurrentState("inProgress");
        onReset();
        
    }
    function onNewGame(){
        setCurrentState("inProgress");
        onReset();
        generateNum();
        setCount(0);
    }
    if(currentState == 'inProgress'){
        return (
            <View>
    
                <Text>Game{randomNumber}</Text>
                <Button title='Logout' onPress={onLogOut}></Button>
                <TextInput value={userGuess} onChangeText={(text) => setUserGuess(text)}></TextInput>
                <Button title='Reset' onPress={onReset}></Button>
                <Button title='Confirm' onPress={onConfirm}></Button>
            </View>
        )
    }
    if(currentState == 'inCorrect'){
        return (
            <View>
                <Text>"incorrect"</Text>
                <Button title='Try Again' onPress={onTryAgain}></Button>
            </View>
        )
    }
    if(currentState == 'correct'){
        return (
            <View>
                <Text>"correct{count}"</Text>
                <Button title='New Game' onPress={onNewGame}></Button>
            </View>
        )
    }
}

export default Game

const styles = StyleSheet.create({})