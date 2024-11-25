import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Wave from 'react-wavify';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* React-Wavify as Background */}
      <Wave
        fill="#c76fcd"
        paused={false}
        style={styles.wave}
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.2,
          points: 4,
        }}
      />

      {/* Main Content */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Welcome To, {'\n'}
          <Text style={styles.highlight}>IoTherapy</Text>
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>
            Let's Start <Text style={styles.arrow}>→</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  wave: {
    position: 'absolute',
    width: '100%',
    height: '50%', // Adjust height based on your design
    bottom: 0, // Position the wave at the bottom
  },
  textContainer: {
    marginTop: 70, // Adjust to create space from the top
    marginLeft: 20, // Adjust to create space from the left
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    marginBottom: 20,
    color: '#755fb4',
  },
  highlight: {
    color: '#c76fcd',
  },
  link: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#000',
    textDecorationLine: 'underline',
  },
});

export default WelcomeScreen;
