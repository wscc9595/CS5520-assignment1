import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import Card from '../components/Card';

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
                <Card>
                    <View style={styles.prompt}><Text>Enter a number</Text></View>
                
                
                <TextInput style={styles.input} value={userGuess} onChangeText={(text) => setUserGuess(text)}></TextInput>
                <View style={styles.buttonBox}>
                <Button title='Reset' onPress={onReset}></Button>
                <Button title='Confirm' onPress={onConfirm}></Button>
                </View>
                
                </Card>
                
            </View>
        )
    }
    if(currentState == 'inCorrect'){
        return (
            <View style={styles.container}>
                <View style={styles.logoutButtonContainer}>
                <Button title='Logout' onPress={onLogOut} ></Button>
                </View>
                <Card>
                    <View style={styles.incorrectInfo}>
                    <Text>"incorrect"</Text>
                <Image style={styles.image} source={require("../assets/sad.jpeg")} />
                    </View>
                
                <View style={styles.try}>
                <Button title='Try Again' onPress={onTryAgain}></Button>
                </View>
                
                </Card>
                
            </View>
        )
    }
    if(currentState == 'correct'){
        return (
            <View style={styles.container}>
                <View style={styles.logoutButtonContainer}>
                <Button title='Logout' onPress={onLogOut} ></Button>
                </View>
                <Card>
                <View style={styles.incorrectInfo}>
                <Text>"You're correct through {count} guesses."</Text>
                <Image style={styles.image} source={{uri: `https://picsum.photos/id/${randomNumber}/100/100`}} />
                </View>
                <View style={styles.try}>
                <Button title='New Game' onPress={onNewGame}></Button>
                </View>
                </Card>
                
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
      prompt: {
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonBox: {
        flex: 1,
    flexDirection:"row",
    alignItems:"center",
    justifyContent: "space-evenly"
    },
    input:{
        borderBottomWidth: 1, 
        borderBottomColor: 'gray',
        paddingHorizontal: 10,
    
    },
    incorrectInfo: {
        flex:2,
        alignItems: "center",
        justifyContent: "center",
    },
    try: {
        flex:1

    }
})