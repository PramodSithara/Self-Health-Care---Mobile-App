import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

const Home = ({navigation}) => {
  const text = 'Self Health Care';
  const [displayedText, setDisplayedText] = useState('');
  const fadeAnim = useState(new Animated.Value(0))[0];
  const buttonFadeAnim = useState(new Animated.Value(0))[0];
  const [showButton, setShowButton] = useState(false);

  const handlePress = () => {
    navigation.navigate('Checkups')
  }

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index));
      index++;

      if (index > text.length) {
        clearInterval(interval);

        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }).start();

        setTimeout(() => {
          setShowButton(true);
          Animated.timing(buttonFadeAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }).start();
        }, 2000);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Animated.Text style={[styles.loadingText, { opacity: fadeAnim }]}>
          {displayedText}
        </Animated.Text>

        <LottieView
          source={require('../assets/Animation-1740191820830.json')}
          autoPlay
          loop
          style={styles.animation}
        />
      </View>

      {showButton && (
        <Animated.View style={[styles.buttonContainer, { opacity: buttonFadeAnim }]}>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Check</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  content: {
    alignItems: 'center', 
  },
  animation: {
    width: 250,
    height: 250,
  },
  loadingText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#20B2AA',
    marginBottom: 6,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 80,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#2ECC71',
    borderRadius: 25,
    shadowColor: '#FF6B6B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
  },
});

export default Home;
