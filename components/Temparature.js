import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Temperature = () => {
  const [temperature, setTemperature] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const tempValue = parseFloat(temperature);

    if (isNaN(tempValue)) {
      setMessage('Please enter a valid temperature.');
      return;
    }

    if (tempValue < 36.0) {
      setMessage('Your body temperature is low. It could indicate hypothermia. Please consult a healthcare provider.');
    } else if (tempValue >= 36.0 && tempValue < 37.0) {
      setMessage('Your body temperature is normal. Keep it up!');
    } else if (tempValue >= 37.0) {
      setMessage('Your body temperature is high. You might have a fever, which could indicate an infection or other health issue.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Body Temperature</Text>

      <TextInput
        style={styles.input}
        placeholder="Temperature in °C"
        keyboardType="numeric"
        value={temperature}
        onChangeText={setTemperature}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {message ? <Text style={styles.message}>{message}</Text> : null}

      <Text style={styles.info}>
        The normal body temperature for a healthy adult is around 36.5°C to 37°C (97.7°F to 98.6°F).
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

export default Temperature;
