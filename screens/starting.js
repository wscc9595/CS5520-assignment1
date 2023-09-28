import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const starting = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    function validateName(){
        if (!name || name.length <= 1 || /\d/.test(name)) {
            setNameError('Please enter a valid name.');
          } else {
            setNameError('');
          }
    }
    function validateEmail(){
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
        setEmailError('Please enter a valid email address.');
        } else {
        setEmailError('');
        }
    }
    function validatePhone(){
        if (!phone || !/^\d{10}$/.test(phone)) {
            setPhoneError('Please enter a valid 10-digit phone number.');
          } else {
            setPhoneError('');
          }
    }


    function handleStart(){
        validateName();
        validateEmail();
        validatePhone();


    }
    function handleReset(){
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
      <View style={styles.card}>
        <Text>Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
          onBlur={validateName}
        />
        <Text style={styles.errorText}>{nameError}</Text>

        <Text>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          onBlur={validateEmail}
        />
        <Text style={styles.errorText}>{emailError}</Text>

        <Text>Phone:</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={(text) => setPhone(text)}
          onBlur={validatePhone}
        />
        <Text style={styles.errorText}>{phoneError}</Text>

        <CheckBox
          value={isChecked}
          onValueChange={(value) => setIsChecked(value)}
        />
        <Text>I agree to the terms and conditions</Text>

        <Button
          title="Reset"
          onPress={handleReset}
        />

        <Button
          title="Start"
          onPress={handleStart}
          disabled={!isChecked}
        />
      </View>
    </View>
  )
}

export default starting

const styles = StyleSheet.create({})