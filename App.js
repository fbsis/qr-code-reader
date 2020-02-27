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
import homeScenes from './scenes/homeScenes'
import qrCOdeReader from './scenes/rastreabilidadeScenes'
import rastreabilidadeDetailsScenes from './scenes/rastreabilidadeDetailsScenes'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={homeScenes} options={{ header: props => <Head title="Ceptis" /> }}/>
      <Stack.Screen name="rastreabilidade" component={qrCOdeReader} options={{ header: props => <Head title="Rastreabilidade" /> }}/>
      <Stack.Screen name="restreabilidadeDetalhes" component={rastreabilidadeDetailsScenes} options={{ header: props => <Head title="Detalhes" /> }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;