import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {card} from "../colors"

const Card = ({children}) => {
  return (
    <View style={styles.card}>
     {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card: {
        borderColor: card,
        borderWidth: 1,
    }
})