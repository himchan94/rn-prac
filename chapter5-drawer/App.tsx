import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import DetailScreen from './screens/DetailScreen';
import {Text} from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <Text>hi</Text>
    </>
  );
}

export default App;
