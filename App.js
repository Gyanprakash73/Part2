import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomTabNavigator from './src/BottomTab/BottomTabNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
