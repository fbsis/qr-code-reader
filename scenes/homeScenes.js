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
import Foot from '../components/Foot'


const Home = (props) => {
  const navigation = props.navigation;



  return (
    <Container>
      {/* <Head /> */}
      <Content >
        <View
          style={{
            margin: 10,

          }}>
          <Button block light info onPress={() => { navigation.navigate('rastreabilidade') }}>
            <Text style={{ justifyContent: 'center' }} >Ler Qr Code</Text>
          </Button>
        </View>

      </Content>
    <Foot />
    </Container >
  );
};


export default Home;
