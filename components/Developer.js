import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const DeveloperProfile = () => {
  const handleEmailPress = () => {
    Linking.openURL('mailto:pramodsithara9999@gmail.com');
  };

  const handlePhonePress = () => {
    Linking.openURL('tel:+94 786966129');
  };

  const handleLinkedInPress = () => {
    Linking.openURL('www.linkedin.com/in/pramod-jayansiri-347152284');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image 
          source={require('../assets/dev.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Pramod Sithara</Text>
        <Text style={styles.position}>Software Developer</Text>
        
        <View style={styles.contactContainer}>
          <TouchableOpacity onPress={handleEmailPress} style={styles.contactButton}>
            <Text style={styles.contactText}>Email: pramodsithara9999@gmail.com</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handlePhonePress} style={styles.contactButton}>
            <Text style={styles.contactText}>Phone: +94 786966129</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleLinkedInPress} style={styles.contactButton}>
            <Text style={styles.contactText}>LinkedIn: Pramod Jayansiri</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 18,
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    elevation: 5, 
    shadowColor: '#000', 
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  position: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
  },
  contactContainer: {
    width: '100%',
    marginTop: 20,
  },
  contactButton: {
    marginVertical: 10,
  },
  contactText: {
    fontSize: 16,
    color: '#2980B9',
  },
});

export default DeveloperProfile;
