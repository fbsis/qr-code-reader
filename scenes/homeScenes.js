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
  StatusBar,
  Image,
} from 'react-native';

import {Container, Content, Button, Text} from 'native-base';

// import Head from '../../components/Head'
import Foot from '../components/Foot';

import logo from '../assets/logo_ceptis_digital.png';

const Home = props => {
  const navigation = props.navigation;

  return (
    <Container>
      {/* <Head /> */}
      <Content>
        <View
          style={{
            margin: 10,
            flex: 1,
          }}>
          <Image
            source={require('../assets/logo_ceptis_digital.png')}
            style={{
              height: 250,
              width: 250,
              alignSelf: 'center',
              margin: 10,
            }}
          />

          <Button
            block
            light
            info
            onPress={() => {
              navigation.push('rastreabilidade');
            }}>
            <Text style={{justifyContent: 'center'}}>Rastreabilidade</Text>
          </Button>
        </View>
      </Content>
      <Foot />
    </Container>
  );
};

export default Home;
