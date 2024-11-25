import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../WelcomeScreen'; // Your Welcome Screen
import LoginScreen from '../LoginScreen'; // Your Login Screen
import SignUpScreen from '../SignUpScreen'; // Your Sign-Up Screen
import AfterSignUpScreen from '../AfterSignUpScreen'; // Your After Sign-Up Screen
import UpdateProfileScreen from '../UpdateProfileScreen'; // Your Update Profile Screen
import DashboardScreen from '../DashboardScreen'; // Import the Dashboard Screen



const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      {/* Welcome Screen */}
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      
      {/* Login Screen */}
      <Stack.Screen name="Login" component={LoginScreen} />
      
      {/* Sign-Up Screen */}
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      
      {/* After Sign-Up Screen */}
      <Stack.Screen
        name="AfterSignUp"
        component={AfterSignUpScreen}
        options={{ headerShown: false }}
      />
      
      {/* Update Profile Screen */}
      <Stack.Screen name="UpdateProfile" component={UpdateProfileScreen} />
      
      {/* Dashboard Screen */}
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen} // Reference the imported DashboardScreen component
        options={{
          title: 'Dashboard', // Optional: Set the title of the header
          headerStyle: { backgroundColor: '#51158c' },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
