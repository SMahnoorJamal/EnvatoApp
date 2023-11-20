

import React from 'react';
import {
  StyleSheet, Image, View, Text
} from 'react-native';
import LoginScreen from '../classes/LoginScreen/index';
// import { TaskScreen } from './src/screens/TaskSceen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import DetailsScreen from '../classes/DetailsScreen';
import ShippingScreen from '../classes/ShippingScreen';
import DetailsScreen from '../classes/DetailsScreen';

const Stack = createNativeStackNavigator();
const  App = () => {

  return (

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        >
        <Stack.Screen
          name="Login"
          component={LoginScreen} />

         <Stack.Screen
          name="Home"
          component={ DetailsScreen} />
      </Stack.Navigator>

    </NavigationContainer>


  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;