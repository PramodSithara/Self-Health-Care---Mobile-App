import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const BloodPressure = () => {
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const systolicValue = parseInt(systolic, 10);
    const diastolicValue = parseInt(diastolic, 10);

    if (isNaN(systolicValue) || isNaN(diastolicValue)) {
      setMessage('Please enter valid numbers for blood pressure.');
      return;
    }

    if (systolicValue < 120 && diastolicValue < 80) {
      setMessage('Your blood pressure is excellent. Keep it up!');
    } else if (
      (systolicValue >= 120 && systolicValue <= 129 && diastolicValue < 80) ||
      (systolicValue < 120 && diastolicValue >= 80 && diastolicValue <= 89)
    ) {
      setMessage('Your blood pressure is normal. Try to stay active and healthy!');
    } else if (
      (systolicValue >= 130 && systolicValue <= 139) ||
      (diastolicValue >= 80 && diastolicValue <= 89)
    ) {
      setMessage('You have stage 1 hypertension. Please consult a healthcare provider.');
    } else if (
      systolicValue >= 140 ||
      diastolicValue >= 90
    ) {
      setMessage('You have stage 2 hypertension. Please consult a healthcare provider immediately!');
    } else {
      setMessage('Blood pressure values are out of range. Please check again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Blood Pressure</Text>

      <TextInput
        style={styles.input}
        placeholder="Systolic Pressure"
        keyboardType="numeric"
        value={systolic}
        onChangeText={setSystolic}
      />
      <TextInput
        style={styles.input}
        placeholder="Diastolic Pressure"
        keyboardType="numeric"
        value={diastolic}
        onChangeText={setDiastolic}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {message ? <Text style={styles.message}>{message}</Text> : null}
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
});

export default BloodPressure;
