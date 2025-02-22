import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Hemoglobin = () => {
  const [hemoglobin, setHemoglobin] = useState('');
  const [gender, setGender] = useState('male');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const hemoglobinValue = parseFloat(hemoglobin);

    if (isNaN(hemoglobinValue)) {
      setMessage('Please enter a valid hemoglobin level.');
      return;
    }

    if (gender === 'male') {
      if (hemoglobinValue >= 13.5 && hemoglobinValue <= 18) {
        setMessage('Your hemoglobin level is normal. Keep it up!');
      } else if (hemoglobinValue < 13.5) {
        setMessage('Your hemoglobin level is low. It could be a sign of anemia. Consult a healthcare provider.');
      } else if (hemoglobinValue > 18) {
        setMessage('Your hemoglobin level is high. It could be due to dehydration or other conditions. Please consult a healthcare provider.');
      }
    } else {
      if (hemoglobinValue >= 11.5 && hemoglobinValue <= 16) {
        setMessage('Your hemoglobin level is normal. Keep it up!');
      } else if (hemoglobinValue < 11.5) {
        setMessage('Your hemoglobin level is low. It could be a sign of anemia. Consult a healthcare provider.');
      } else if (hemoglobinValue > 16) {
        setMessage('Your hemoglobin level is high. It could be due to dehydration or other conditions. Please consult a healthcare provider.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Hemoglobin Level (g/dL)</Text>

      <Picker
        selectedValue={gender}
        style={styles.picker}
        onValueChange={(itemValue) => setGender(itemValue)}
      >
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>

      <TextInput
        style={styles.input}
        placeholder="Hemoglobin Level"
        keyboardType="numeric"
        value={hemoglobin}
        onChangeText={setHemoglobin}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {message ? <Text style={styles.message}>{message}</Text> : null}

      <Text style={styles.info}>
        Low hemoglobin levels can indicate anemia, while high levels could indicate dehydration or other conditions. It's essential to consult a healthcare provider if your levels are abnormal.
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
  picker: {
    width: '100%',
    height: 50,
    marginBottom: 15,
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

export default Hemoglobin;
