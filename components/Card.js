import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from "../colors"
const Card = ({ children }) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}
export default Card
const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    width: 300,
    height: 500,
    padding: 15,
    borderRadius: 6,
    elevation: Platform.OS === 'android' ? 3 : 0,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.5,
  }
})