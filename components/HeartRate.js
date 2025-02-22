import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const HeartRate = () => {
  const [heartRate, setHeartRate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const heartRateValue = parseInt(heartRate, 10);

    if (isNaN(heartRateValue)) {
      setMessage('Please enter a valid heart rate.');
      return;
    }

    if (heartRateValue >= 70 && heartRateValue <= 100) {
      setMessage('Your heart rate is excellent. Keep it up!');
    } else if (heartRateValue < 60) {
      setMessage('Your heart rate is low. It could indicate potential health concerns. Please consult a healthcare provider.');
    } else if (heartRateValue > 100) {
      setMessage('Your heart rate is high. It could indicate stress, exercise, or health issues. Please consult a healthcare provider.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Heart Rate (bpm)</Text>

      <TextInput
        style={styles.input}
        placeholder="Heart Rate"
        keyboardType="numeric"
        value={heartRate}
        onChangeText={setHeartRate}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {message ? <Text style={styles.message}>{message}</Text> : null}

      <Text style={styles.info}>
        An excellent heart rate is typically between 70 bpm and 100 bpm at rest. A heart rate below 60 bpm or above 100 bpm could indicate potential health issues.
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

export default HeartRate;
