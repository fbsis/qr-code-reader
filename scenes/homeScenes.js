import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Image,
} from 'react-native';

import {Container, Content, Button, Text} from 'native-base';
import Foot from '../components/Foot';
import {getLogo} from '../services/themeServices';

const Home = props => {
  const navigation = props.navigation;
  const [image, setImageState] = useState(null);

  useEffect(() => {
    getLogo().then(data => {
      setImageState(data);
    });
  });

  const style = {
    height: 350,
    width: 350,
    alignSelf: 'center',
    margin: 50,
    marginTop: 50,
  };
  return (
    <Container>
      <Content>
        <View
          style={{
            margin: 10,
            flex: 1,
          }}>
          {image == null && (
            <Image
              source={require('../assets/logo_ceptis_digital.png')}
              style={style}
            />
          )}
          {image != null && <Image source={{uri: image}} style={style} />}

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
