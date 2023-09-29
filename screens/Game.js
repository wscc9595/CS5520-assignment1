import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native'
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
            <View style={styles.container}>
    
                <Text>Game{randomNumber}</Text>
                <View style={styles.logoutButtonContainer}>
                <Button title='Logout' onPress={onLogOut} ></Button>
                </View>
                <Text>Please guess a number between 10 and 20.</Text>
                <Text>Enter a number</Text>
                
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
                <Image style={styles.image} source={require("../assets/sad.jpeg")} />
                <Button title='Try Again' onPress={onTryAgain}></Button>
            </View>
        )
    }
    if(currentState == 'correct'){
        return (
            <View>
                <Text>"You're correct through {count} guesses."</Text>
                <Image style={styles.image} source={{uri: 'https://picsum.photos/id/${randomNumber}/100/100'}} />
                <Button title='New Game' onPress={onNewGame}></Button>
            </View>
        )
    }
}

export default Game

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      logoutButtonContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
      },
      image: {
        width: 100,
        height: 100,
      },
})