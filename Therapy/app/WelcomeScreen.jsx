import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
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
      <View style={styles.headerContainer}>
        {/* Title Section */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Welcome To, {'\n'}
            <Text style={styles.highlight}>IoTherapy</Text>
          </Text>

          {/* Let's Start Button */}
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>
              Let's Start <Text style={styles.arrow}>→</Text>
            </Text>
          </TouchableOpacity>
        </View>

        {/* Girl Image */}
        <Image
          source={require('../assets/images/image.png')} // Replace with your image path
          style={styles.girlImage}
        />
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 70, // Adjust to create space from the top
    paddingHorizontal: 20, // Add padding for both text and image
  },
  textContainer: {
    flex: 1, // Ensures text takes up available space
    justifyContent: 'center', // Align text and button closer
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    marginBottom: 10, // Reduce margin to bring button closer
    color: '#755fb4',
  },
  highlight: {
    color: '#c76fcd',
  },
  girlImage: {
    width: 310, // Adjust image size
    height: 200, // Adjust image size
  },
  link: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#000',
    textDecorationLine: 'underline',
    marginTop: 0, // Add some spacing below the title
  },
});

export default WelcomeScreen;
