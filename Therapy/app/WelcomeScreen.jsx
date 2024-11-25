import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ImageBackground  } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/backgroun.png')} // Replace with your image path
        style={styles.background}
        resizeMode="cover" // Ensures the image covers the entire screen
      ></ImageBackground>
      <Text style={styles.title}>
          Welcome To, {"\n"}<Text style={styles.highlight}>IoTherapy</Text>
        </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <Text style={styles.link}>
            Let's Start <Text style={styles.arrow}>→</Text>
          </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
     flex: 1,
    alignItems: 'flex-start', // Align items to the start (left)
    justifyContent: 'flex-start', // Align items to the start (top)
    padding: 20, // Add some padding if needed
    
  },
  highlight: {
    color:"#c76fcd",
    marginLeft: 0,
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  textContainer: {
    marginTop: 70, // Adjust to create space from the top
    marginLeft: 20, // Adjust to create space from the left
    
  },
  title: {
    fontSize: 30,
   fontWeight:'500',
    marginBottom: 20,
    color:"#755fb4"
    
  },
  link: {
    marginLeft: 20,
    fontSize: 18,
    fontStyle: 'italic',
    color: '#0066cc',
    textDecorationLine: 'underline',
    color:"#000000",
  },
});

export default WelcomeScreen;
