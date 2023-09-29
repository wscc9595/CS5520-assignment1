import { StyleSheet, Text, View, Modal, Button } from 'react-native'
import React from 'react'
import Card from '../components/Card';

const Confirm = ({ visible, userInfo, handleCurrentPage, generateNum }) => {
    function onBack(){
        handleCurrentPage("Start");
    }
    function onContinue(){
        handleCurrentPage("Game");
        generateNum();

    }
    return (
        <Modal style={styles.card} visible={visible}>
            <Card>
                <Text>Name: {userInfo.name}</Text>
                <Text>Email: {userInfo.email}</Text>
                <Text>Phone: {userInfo.phone}</Text>
                <Button title="Go back" onPress={onBack} />
                <Button title="Continue" onPress={onContinue} />
            </Card>
        </Modal>

    )
}

export default Confirm

const styles = StyleSheet.create({})