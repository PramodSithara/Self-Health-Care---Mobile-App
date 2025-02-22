import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const BloodSugar = () => {
  const [sugarLevel, setSugarLevel] = useState('');
  const [ageGroup, setAgeGroup] = useState('adults');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const sugarValue = parseFloat(sugarLevel);
    if (isNaN(sugarValue)) {
      setMessage('Please enter a valid blood sugar level.');
      return;
    }

    let normalRange;
    if (ageGroup === 'children') {
      normalRange = { min: 70, max: 130 };
      if (sugarValue < normalRange.min) {
        setMessage('Your blood sugar level is low. Seek medical advice.');
      } else if (sugarValue >= normalRange.min && sugarValue <= normalRange.max) {
        setMessage('Your blood sugar level is normal as children. Keep maintaining healthy habits.');
      } else {
        setMessage('Your blood sugar level is high. Consider dietary adjustments and consulting a healthcare provider.');
      }
    } else {
      normalRange = { min: 70, max: 115 };
      if (sugarValue < normalRange.min) {
        setMessage('Your blood sugar level is low. Seek medical advice.');
      } else if (sugarValue >= normalRange.min && sugarValue <= normalRange.max) {
        setMessage('Your blood sugar level is normal as adults. Keep maintaining healthy habits.');
      } else {
        setMessage('Your blood sugar level is high. Consider dietary adjustments and consulting a healthcare provider.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Blood Sugar Level (mg/dL)</Text>

      <Picker
        selectedValue={ageGroup}
        style={styles.picker}
        onValueChange={(itemValue) => setAgeGroup(itemValue)}>
        <Picker.Item label="Children" value="children" />
        <Picker.Item label="Adults" value="adults" />
      </Picker>

      <TextInput
        style={styles.input}
        placeholder="Blood Sugar Level"
        keyboardType="numeric"
        value={sugarLevel}
        onChangeText={setSugarLevel}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {message ? <Text style={styles.message}>{message}</Text> : null}

      <Text style={styles.info}>
        It's important to maintain blood sugar within these ranges for overall health and to avoid complications like diabetes.
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
  picker: {
    width: '100%',
    height: 50,
    marginBottom: 15,
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
  }
});

export default BloodSugar;
