/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Container, Content, Button } from 'native-base';


// import Head from '../../components/Head'
import Foot from '../../components/Foot/'


const Home = () => {
  return (
    <Container>
      {/* <Head /> */}
      <Content >
        <View
          style={{
            margin: 10,
            
          }}>
          <Button block light info>
            <Text style={{justifyContent: 'center'}}>Ler código de barra</Text>
          </Button>
        </View>

      </Content>
      <Foot />
    </Container >
  );
};


export default Home;
