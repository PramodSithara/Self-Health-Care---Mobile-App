import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Triglycerides = () => {
  const [triglycerides, setTriglycerides] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const triglycerideValue = parseFloat(triglycerides);

    if (isNaN(triglycerideValue)) {
      setMessage('Please enter a valid triglyceride level.');
      return;
    }

    if (triglycerideValue < 150) {
      setMessage('Your triglyceride level is normal. Keep up the healthy habits!');
    } else if (triglycerideValue >= 150 && triglycerideValue <= 199) {
      setMessage('Your triglyceride level is borderline high. Consider improving your diet and exercising more.');
    } else if (triglycerideValue >= 200 && triglycerideValue <= 499) {
      setMessage('Your triglyceride level is high. This can increase the risk of heart disease. Consult a healthcare provider.');
    } else if (triglycerideValue >= 500) {
      setMessage('Your triglyceride level is very high. This can cause pancreatitis and serious health complications. Seek immediate medical advice.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Triglyceride Level (mg/dL)</Text>

      <TextInput
        style={styles.input}
        placeholder="Triglyceride Level"
        keyboardType="numeric"
        value={triglycerides}
        onChangeText={setTriglycerides}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {message ? <Text style={styles.message}>{message}</Text> : null}

      <Text style={styles.info}>
        Normal triglyceride levels are below 150 mg/dL. Levels between 150 and 199 mg/dL are borderline high, while levels between 200 and 499 mg/dL are considered high. Anything over 500 mg/dL is very high and requires immediate medical attention.
      </Text>
      <Text style={styles.info}>
        High triglyceride levels can increase your risk for heart disease and other serious conditions. Lifestyle changes like a healthy diet, regular exercise, and weight management can help maintain healthy levels.
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

export default Triglycerides;
