

import React from 'react';
import {
  StyleSheet, Image, View,Text
} from 'react-native';
import LoginScreen from './src/classes/LoginScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from './src/Navigation';
// import { NewTaskScreen } from './src/screens/NewTaskScreen';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Reminder } from './src/popups/Reminder';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import { Location } from './src/screens/Location';
// import Tabs from './src/Navigation/tabs';

//const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {

  return (

<Navigation></Navigation>

  )
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;