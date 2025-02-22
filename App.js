import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Dashboard from './components/Dashboard'
import BloodPressure from './components/BooldPressure'
import HeartRate from './components/HeartRate'
import Temparature from './components/Temparature'
import Cholesterol from './components/Cholesterol'
import Hemoglobin from './components/Hemoglobin'
import Potassium from './components/Potassium'
import Sodium from './components/Sodium'
import Triglyceride from './components/Triglycerides'
import BloodSugar from './components/BloodSugar'
import Calcium from './components/Calcium'
import IronLevel from './components/IronLevel'
import Developer from './components/Developer'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Self Health Care" component={Home} />
        <Stack.Screen name="Checkups" component={Dashboard} />
        <Stack.Screen name="Developer" component={Developer} />
        <Stack.Screen name="Triglyceride Level" component={Triglyceride} />
        <Stack.Screen name="Sodium Level" component={Sodium} />
        <Stack.Screen name="Potassium Level" component={Potassium} />
        <Stack.Screen name="Iron Level" component={IronLevel} />
        <Stack.Screen name="Hemoglobin Level" component={Hemoglobin} />
        <Stack.Screen name="Cholesterol Level" component={Cholesterol} />
        <Stack.Screen name="Calcium Level" component={Calcium} />
        <Stack.Screen name="Blood Sugar" component={BloodSugar} />
        <Stack.Screen name="Body Temp" component={Temparature} />
        <Stack.Screen name="Heart Rate" component={HeartRate} />
        <Stack.Screen name="Blood Pressure" component={BloodPressure} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

