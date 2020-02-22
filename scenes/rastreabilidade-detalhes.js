import React, { Component } from 'react';
import {
  AppRegistry,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Linking,
} from 'react-native';

import { Root , Toast } from 'native-base';

class rastreabilidade_detalhes extends Component {

  render() {
    return (
      <Root>
        <TouchableOpacity style={styles.buttonTouchable} onPress={() => this.processTouch("PW189909906BRF")}>
          <Text  >Fake it</Text>
        </TouchableOpacity>
      </Root>
    )

  }
}


export default rastreabilidade_detalhes;
