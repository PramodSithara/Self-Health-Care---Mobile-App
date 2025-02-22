import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Sodium = () => {
  const [sodium, setSodium] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const sodiumValue = parseFloat(sodium);

    if (isNaN(sodiumValue)) {
      setMessage('Please enter a valid sodium level.');
      return;
    }

    if (sodiumValue >= 135 && sodiumValue <= 145) {
      setMessage('Your sodium level is normal. Keep it up!');
    } else if (sodiumValue < 135) {
      setMessage('Your sodium level is low. This can cause symptoms like headache, nausea, confusion, and muscle cramps. Consult a healthcare provider.');
    } else if (sodiumValue > 145) {
      setMessage('Your sodium level is high. This can cause symptoms like dry mouth, confusion, irritability, and muscle twitching. Please consult a healthcare provider.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Sodium Level (mEq/L)</Text>

      <TextInput
        style={styles.input}
        placeholder="Sodium Level"
        keyboardType="numeric"
        value={sodium}
        onChangeText={setSodium}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {message ? <Text style={styles.message}>{message}</Text> : null}

      <Text style={styles.info}>
        The normal range for sodium levels is between 135 and 145 mEq/L. Both low and high levels can lead to serious health issues, especially related to fluid balance, blood pressure, and nerve function.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2980B9',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    fontSize: 18,
  },
  button: {
    width: '80%',
    backgroundColor: '#4DB6AC',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  message: {
    marginTop: 20,
    fontSize: 18,
    color: '#2980B9',
    fontWeight: 'bold',
  },
  info: {
    marginTop: 20,
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default Sodium;
