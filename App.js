import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true}></StatusBar>
      <Routes></Routes>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
