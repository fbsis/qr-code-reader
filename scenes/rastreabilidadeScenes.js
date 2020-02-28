import React, {Component} from 'react';
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

import {Root, Toast} from 'native-base';

import QRCodeScanner from 'react-native-qrcode-scanner';
import Camera from 'react-native-camera';

import {getInformation} from '../services/trackingCodeServices';

class qrCOdeReader extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  onSuccess = e => {
    getInformation(e.data);
    retorno = getInformation(e.data);

    // Linking
    //   .openURL(e.data)
    //   .catch(err => console.error('An error occured', err));
  };

  processTouch(idCode) {
    let info = getInformation(idCode);

    if (info.length == 0) {
      Toast.show({
        text: 'Código não encontrado',
        buttonText: 'Fechar',
      });
    } else {
      this.props.navigation.navigate('restreabilidadeDetalhes', info[0]);
    }

    return info;
  }

  // render() {
  //   return (
  //     <QRCodeScanner
  //       onRead={this.onSuccess}
  //       //flashMode={QRCodeScanner.Constants.FlashMode.torch}
  //       topContent={
  //         <Text style={styles.centerText}>
  //           Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
  //         </Text>
  //       }
  //       bottomContent={
  //           <TouchableOpacity style={styles.buttonTouchable}>
  //             <Text style={styles.buttonText}>OK. Got it!</Text>
  //           </TouchableOpacity>
  //       }
  //     />
  //   );
  // }

  render() {
    return (
      <Root>
        <TouchableOpacity
          style={styles.buttonTouchable}
          onPress={() => this.processTouch('PW189909906BR')}>
          <Text>Fake it</Text>
        </TouchableOpacity>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default qrCOdeReader;
