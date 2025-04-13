// App.js

// Import the core React library
import React from 'react';

// Import navigation utilities
// - NavigationContainer: sets up the navigation structure
// - createStackNavigator: defines the screen stack
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import the screens
import UploadScreen from './src/screens/UploadScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';

// Create the stack navigator for screen transitions
const Stack = createStackNavigator();

export default function App() {
  return (
    // Wrap the whole app in NavigationContainer
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Upload" // The first screen the user sees
        screenOptions={{ headerShown: false }} // Disable headers for a full-screen experience
      >
        {/* UploadScreen: the splash screen with video */}
        <Stack.Screen name="Upload" component={UploadScreen} />
        
        {/* LoginScreen: where the user logs in */}
        <Stack.Screen name="Login" component={LoginScreen} />
        
        {/* HomeScreen: the main dashboard after logging in */}
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
