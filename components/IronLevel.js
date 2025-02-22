import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const IronLevel = () => {
  const [ironLevel, setIronLevel] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const ironValue = parseFloat(ironLevel);
    if (isNaN(ironValue)) {
      setMessage('Please enter a valid iron level.');
      return;
    }

    const normalRange = { min: 8, max: 15 };

    if (ironValue < normalRange.min) {
      setMessage('Your iron level is low (Iron Deficiency). Symptoms include fatigue, weakness, and dizziness.');
    } else if (ironValue >= normalRange.min && ironValue <= normalRange.max) {
      setMessage('Your iron level is normal. Keep maintaining a healthy diet with iron-rich foods.');
    } else {
      setMessage('Your iron level is high (Iron Overload). Symptoms include joint pain, abdominal pain, and fatigue.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Blood Iron Level (mg/dL)</Text>

      <TextInput
        style={styles.input}
        placeholder="Iron Level (serum iron)"
        keyboardType="numeric"
        value={ironLevel}
        onChangeText={setIronLevel}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {message ? <Text style={styles.message}>{message}</Text> : null}

      <Text style={styles.info}>
        Iron is important for oxygen transport, energy production, and overall health.
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

export default IronLevel;
