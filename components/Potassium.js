import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Import the picker component

const Potassium = () => {
  const [potassium, setPotassium] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const potassiumValue = parseFloat(potassium);

    if (isNaN(potassiumValue)) {
      setMessage('Please enter a valid potassium level.');
      return;
    }

    if (potassiumValue >= 3.5 && potassiumValue <= 5.0) {
      setMessage('Your potassium level is normal. Keep it up!');
    } else if (potassiumValue < 3.5) {
      setMessage('Your potassium level is low. This can cause muscle weakness, cramping, and heart issues. Consult a healthcare provider.');
    } else if (potassiumValue > 5.0) {
      setMessage('Your potassium level is high. This can cause muscle weakness, fatigue, and heart issues. Please consult a healthcare provider.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Potassium Level (mmol/L)</Text>

      <TextInput
        style={styles.input}
        placeholder="Potassium Level"
        keyboardType="numeric"
        value={potassium}
        onChangeText={setPotassium}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {message ? <Text style={styles.message}>{message}</Text> : null}

      <Text style={styles.info}>
        The normal range for potassium levels is between 3.5 and 5.0 mmol/L. Both low and high levels can cause serious health issues, especially related to the heart and muscles.
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

export default Potassium;
