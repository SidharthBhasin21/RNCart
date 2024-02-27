import React, {useState} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductWrapper from './components/ProductWrapper';
import Cart from './components/Cart';


const Stack = createNativeStackNavigator();

function App() {
  
  return (
    <NavigationContainer >
      <Stack.Navigator  screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={ProductWrapper} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: 'white',
    fontSize: 24,
  },
  map: {
    height: 400,
    width: 400,
    backgroundColor: 'blue',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    textShadowColor: 'red',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
    fontSize: 20,
  },
});

export default App;
