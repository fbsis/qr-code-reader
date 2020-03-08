import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Head from './components/Head';
import homeScenes from './scenes/homeScenes';
import qrCOdeReader from './scenes/rastreabilidadeScenes';
import rastreabilidadeDetailsScenes from './scenes/rastreabilidadeDetailsScenes';
import configScenes from './scenes/configScenes';
import configDatabaseScenes from './scenes/configDatabaseScenes';
import themesScenes from './scenes/themesScenes';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={homeScenes}
          options={{
            header: props => <Head {...props} title="Ceptis" tools={true} />,
          }}
        />
        <Stack.Screen
          name="rastreabilidade"
          component={qrCOdeReader}
          options={{
            header: props => (
              <Head {...props} title="Rastreabilidade" tools={false} />
            ),
          }}
        />
        <Stack.Screen
          name="restreabilidadeDetalhes"
          component={rastreabilidadeDetailsScenes}
          options={{
            header: props => <Head {...props} title="Detalhes" tools={false} />,
          }}
        />

        <Stack.Screen
          name="configuracao"
          component={configScenes}
          options={{
            header: props => (
              <Head {...props} title="Configurações" tools={false} />
            ),
          }}
        />

        <Stack.Screen
          name="configDatabase"
          component={configDatabaseScenes}
          options={{
            header: props => (
              <Head {...props} title="Banco de dados" tools={false} />
            ),
          }}
        />

        <Stack.Screen
          name="temas"
          component={themesScenes}
          options={{
            header: props => <Head {...props} title="Temas" tools={false} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
