import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const backendUrl = 'http://localhost:5000'; // Replace with your backend URL or IP if testing on a physical device

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${backendUrl}/api/users/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        const { userId } = response.data; // Assuming the backend returns the userId
        Alert.alert('Success', 'Logged in successfully!');
        navigation.navigate('AfterSignUp', { userId: response.data.userId });
        // Pass userId to AfterSignUpScreen
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Invalid email or password. Please try again!');
    }
  };

  return (
    <LinearGradient
      colors={['purple', 'white']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#f89be2',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    marginTop: 15,
    fontSize: 14,
    color: '#0066cc',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

export default LoginScreen;