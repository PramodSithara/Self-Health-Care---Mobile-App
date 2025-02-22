import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Checkup</Text>

      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Blood Pressure')}
        >
          <Text style={styles.buttonText}>Check Blood Pressure</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Heart Rate')}
        >
          <Text style={styles.buttonText}>Check Heart Rate</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Body Temp')}
        >
          <Text style={styles.buttonText}>Check Temperature</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Blood Sugar')}
        >
          <Text style={styles.buttonText}>Check Blood Sugar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Calcium Level')}
        >
          <Text style={styles.buttonText}>Check Calcium Level</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Cholesterol Level')}
        >
          <Text style={styles.buttonText}>Check Cholesterol Level</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Hemoglobin Level')}
        >
          <Text style={styles.buttonText}>Check Hemoglobin Level</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Iron Level')}
        >
          <Text style={styles.buttonText}>Check Iron Level</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Potassium Level')}
        >
          <Text style={styles.buttonText}>Check Potassium Level</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Sodium Level')}
        >
          <Text style={styles.buttonText}>Check Sodium Level</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Triglyceride Level')}
        >
          <Text style={styles.buttonText}>Check Triglycerides Level</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.developerButton}
          onPress={() => navigation.navigate('Developer')}
        >
          <Text style={styles.buttonText}>Developer</Text>
        </TouchableOpacity>


      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2980B9',
    marginBottom: 30,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  button: {
    width: '100%',
    backgroundColor: '#4DB6AC',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  developerButton: {
    marginTop:40,
    width: '100%',
    backgroundColor: '#2F4F4F',
    padding: 25,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default Dashboard;
