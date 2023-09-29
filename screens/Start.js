import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import Checkbox from 'expo-checkbox'
import React from 'react'
import { useState } from 'react';
import Card from "../components/Card";
import { colors } from '../colors';
const Start = ({ handleCurrentPage, handleUserInfo, userInfo }) => {
  const [name, setName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const [phone, setPhone] = useState(userInfo.phone);
  const [isChecked, setIsChecked] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  function validateName() {
    if (!name || name.length <= 1 || /\d/.test(name)) {
      setNameError('Please enter a valid name.');
      return false;
    } else {
      setNameError('');
      return true
    }
  }
  function validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email || !emailPattern.test(email)) {
      setEmailError('Please enter a valid email address.');
      return false
    } else {
      setEmailError('');
      return true
    }
  }
  function validatePhone() {
    if (!phone || !/^\d{10}$/.test(phone)) {
      setPhoneError('Please enter a valid 10-digit phone number.');
      return false
    } else {
      setPhoneError('');
      return true
    }
  }
  function handleStart() {
    validateName();
    validateEmail();
    validatePhone();
    if (validateName() && validateEmail() && validatePhone() && isChecked) {
      handleCurrentPage("Confirm");
      handleUserInfo({ name, email, phone });
    }
  }
  function handleReset() {
    setName('');
    setEmail('');
    setPhone('');
    setIsChecked(false);
    setNameError('');
    setEmailError('');
    setPhoneError('');
  }
  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.inputBox}>
          <Text>Name:</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <Text style={styles.errorText}>{nameError}</Text>
          <Text>Email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Text style={styles.errorText}>{emailError}</Text>
          <Text>Phone:</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={(text) => setPhone(text)}
          />
          <Text style={styles.errorText}>{phoneError}</Text>
        </View>
        <View style={styles.checkBox}>
          <Checkbox
            value={isChecked}
            onValueChange={(value) => setIsChecked(value)}
          />
          <Text>I agree to the terms and conditions</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Reset"
            color={colors.reset}
            onPress={handleReset}
          />
          <Button
            title="Start"
            onPress={handleStart}
            disabled={!isChecked}
          />
        </View>
      </Card>
    </View>
  )
}
export default Start
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  inputBox: {
    flex: 3,
    alignItems: "stretch"
  },
  checkBox: {
    flex: 1,
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  }
})