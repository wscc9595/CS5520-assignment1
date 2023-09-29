import { StyleSheet, Text, View, Modal, Button } from 'react-native'
import React from 'react'
import Card from '../components/Card';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../colors';

const Confirm = ({ visible, userInfo, handleCurrentPage, generateNum }) => {
    function onBack(){
        handleCurrentPage("Start");
    }
    function onContinue(){
        handleCurrentPage("Game");
        generateNum();

    }
    return (
        <View style={styles.container}>
            <Modal visible={visible}>
            <LinearGradient
        colors={[colors.screenStart, colors.screenMid, colors.screenEnd]} 
        style={styles.confirmContainer}
      >
            <Card style={styles.confirmCard}>
                <View style={styles.info}>
                <Text>Name: {userInfo.name}</Text>
                <Text>Email: {userInfo.email}</Text>
                <Text>Phone: {userInfo.phone}</Text>
                </View>
                
                <View style={styles.buttonBox}>
                <Button title="Go back" onPress={onBack} />
                <Button title="Continue" onPress={onContinue} />
                </View>
                
            </Card>
            </LinearGradient>
        </Modal>
        </View>
        
        
        
        

    )
}

export default Confirm

const styles = StyleSheet.create({
    confirmContainer: {
        justifyContent: "center",
        flex:1,
        alignItems: 'center',

    },
    confirmCard: {
        alignItems:"stretch"

    },
    buttonBox: {
        flex: 1,
    flexDirection:"row",
    alignItems:"center",
    justifyContent: "space-evenly"
    },
    info: {
        flex: 0.05,
        alignItems:"stretch"
    }

})