import React, {Component} from 'react';
import {StyleSheet, View, Modal, TouchableHighlight, Alert} from 'react-native';
import {AsyncStorage} from 'react-native';

import {Root, Toast, Content, List, ListItem, Text} from 'native-base';

class configScenes extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  askReset = () => {
    Alert.alert(
      'Limpar dados',
      'Tem certeza que deseja limpar e reiniciar as configurações do aplicativo de fábrica?',
      [
        {
          text: 'Sim, quero reiniciar',
          onPress: () => {
            AsyncStorage.clear();
            Alert.alert('Limpar dados', 'Dados limpos com sucesso');
          },
        },
        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  };

  render() {
    return (
      <Content>
        <List>
          <ListItem
            onPress={() => this.props.navigation.push('configDatabase')}>
            <Text>Banco de dados</Text>
          </ListItem>
          <ListItem onPress={() => this.props.navigation.push('temas')}>
            <Text>Temas</Text>
          </ListItem>
          <ListItem onPress={() => this.askReset()}>
            <Text>Limpar e reiniciar o App</Text>
          </ListItem>
        </List>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  buttonTouchable: {
    padding: 16,
  },
});

export default configScenes;
