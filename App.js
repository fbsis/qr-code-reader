import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Head from './components/Head'
import Home from './scenes/Home/homeScenes'
import qrCOdeReader from './scenes'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ header: props => <Head title="Ceptis" /> }}/>
      <Stack.Screen name="rastreabilidade" component={qrCOdeReader} options={{ header: props => <Head title="Rastreabilidade" /> }}/>
      <Stack.Screen name="restreabilidade-detalhes" component={qrCOdeReader} options={{ header: props => <Head title="Rastreabilidade" /> }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;