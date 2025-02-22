import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CalciumLevel = () => {
  const [calciumLevel, setCalciumLevel] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const calciumValue = parseFloat(calciumLevel);
    if (isNaN(calciumValue)) {
      setMessage('Please enter a valid calcium level.');
      return;
    }

    const normalRange = { min: 8.6, max: 10.3 };

    if (calciumValue < normalRange.min) {
      setMessage('Your calcium level is low (Hypocalcemia). Symptoms include muscle cramps, tingling, and fatigue.');
    } else if (calciumValue >= normalRange.min && calciumValue <= normalRange.max) {
      setMessage('Your calcium level is normal. Keep maintaining a healthy diet and exercise.');
    } else {
      setMessage('Your calcium level is high (Hypercalcemia). Symptoms include fatigue, nausea, and kidney stones.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Blood Calcium Level (mg/dL)</Text>

      <TextInput
        style={styles.input}
        placeholder="Blood Calcium Level"
        keyboardType="numeric"
        value={calciumLevel}
        onChangeText={setCalciumLevel}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {message ? <Text style={styles.message}>{message}</Text> : null}

      <Text style={styles.info}>
        Calcium plays a vital role in bone health, muscle function, nerve transmission, and heart health.
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

export default CalciumLevel;
