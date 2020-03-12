import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Modal,
  TouchableHighlight,
} from 'react-native';

import {Root, Toast, Content, List, ListItem, Text} from 'native-base';

class configScenes extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Content>
       

        <List>
          <ListItem onPress={() => this.props.navigation.push("configDatabase")}>
            <Text>Banco de dados</Text>
          </ListItem>
          <ListItem onPress={() => this.props.navigation.push("temas")}>
            <Text>Temas</Text>
          </ListItem>
          <ListItem onPress={() => this.props.navigation.push("clearDatabase")}>
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
