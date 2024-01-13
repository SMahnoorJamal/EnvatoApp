

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from './src/Navigation';
import {ProductListingFnc} from './src/classes/ProductListingFnc';
import { View } from 'react-native';
const Stack = createNativeStackNavigator();

function App ()  {

  return (
<Navigation></Navigation>
  )
};
export default App;