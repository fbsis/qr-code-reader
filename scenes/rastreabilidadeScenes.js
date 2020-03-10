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
  Alert
} from 'react-native';

import {Root, Toast} from 'native-base';

import QRCodeScanner from 'react-native-qrcode-scanner';
import Camera from 'react-native-camera';

import {getInformation} from '../services/trackingCodeServices';

class qrCOdeReader extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      reactivate: true,
    };
    
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.setState({reactivate: true});
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  onSuccess = async e => {
    console.log(e);
    //getInformation(e.data);
    retorno = await getInformation(e.data);

    this.processTouch(e.data);
  };

  async processTouch(idCode) {
    let info = await getInformation(idCode);

    if (info.length == 0) {
      Alert.alert(
        'Código não encontrado',
        'Verifique a informação lida e se a impressão está legivel e tente novamente',
      );
    } else {
      this.props.navigation.push('rastreabilidadeDetalhes', info[0]);
      this.setState({reactivate: false});
    }

    return info;
  }

  render() {
    return (
      <Root>
        {this.state.reactivate && (
          <QRCodeScanner
            onRead={this.onSuccess}
            reactivateTimeout={5}
            reactivate={this.state.reactivate}
            //flashMode={QRCodeScanner.Constants.FlashMode.torch}
            // topContent={
            //   <Text style={styles.centerText}>
            //     Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
            //   </Text>
            // }
            // bottomContent={
            //     <TouchableOpacity style={styles.buttonTouchable}>
            //       <Text style={styles.buttonText}>OK. Got it!</Text>
            //     </TouchableOpacity>
            // }
          />
        )}
      </Root>
    );
  }

  // render() {
  //   return (
  //     <Root>
  //       <TouchableOpacity
  //         style={styles.buttonTouchable}
  //         onPress={() => this.processTouch('PW123456789BR2')}>
  //         <Text>Fake it</Text>
  //       </TouchableOpacity>
  //     </Root>
  //   );
  // }
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
