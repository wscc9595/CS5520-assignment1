import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Start from './screens/Start';
import Confirm from './screens/Confirm';
import Game from './screens/Game';

export default function App() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [currentPage, setCurrentPage] = useState("Start");
  const [userInfo, setUserInfo] = useState({});
  function generateNum() {
    const min = 10;
    const max = 20;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(random);

  }
  function resetNum() {
    setRandomNumber(null);
  }
  function handleCurrentPage(page){
    setCurrentPage(page);
  }
  function handleUserInfo(info){
    setUserInfo(info);
  }
  return (
    <View style={styles.container}>
      {currentPage === 'Start' && (
        <Start handleCurrentPage={handleCurrentPage} handleUserInfo={handleUserInfo} userInfo={userInfo}/>
      )}
      {currentPage === 'Game' && (
        <Game handleCurrentPage={handleCurrentPage} handleUserInfo={handleUserInfo} 
        randomNumber={randomNumber} generateNum={generateNum} resetNum={resetNum} />
      )}
      <Confirm handleCurrentPage={handleCurrentPage} visible={currentPage === "Confirm"} userInfo={userInfo}
      generateNum={generateNum} />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
