import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Cholesterol = () => {
  const [cholesterol, setCholesterol] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const cholesterolValue = parseInt(cholesterol, 10);

    if (isNaN(cholesterolValue)) {
      setMessage('Please enter a valid cholesterol level.');
      return;
    }

    if (cholesterolValue >= 130 && cholesterolValue <= 200) {
      setMessage('Your cholesterol level is excellent. Keep up the good work!');
    } else if (cholesterolValue < 130) {
      setMessage('Your cholesterol level is on the lower end. Consult a healthcare provider for advice.');
    } else if (cholesterolValue > 200 && cholesterolValue < 240) {
      setMessage('Your cholesterol level is borderline high. Consider making lifestyle changes like improving your diet or exercising.');
    } else if (cholesterolValue >= 240) {
      setMessage('Your cholesterol level is high. It’s important to take steps to lower it, possibly with the help of medication.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Total Cholesterol (mg/dL)</Text>

      <TextInput
        style={styles.input}
        placeholder="Cholesterol Level"
        keyboardType="numeric"
        value={cholesterol}
        onChangeText={setCholesterol}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {message ? <Text style={styles.message}>{message}</Text> : null}

      <Text style={styles.info}>
        A cholesterol level between 130 and 200 mg/dL is considered excellent. This means you're in a healthy range for heart health.
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

export default Cholesterol;
