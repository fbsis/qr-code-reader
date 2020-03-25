import React, {Component, useState, useEffect} from 'react';

import {StyleSheet, Root, Toast, Alert, Modal, View} from 'react-native';

import {
  Content,
  Text,
  Form,
  Textarea,
  Button,
  Card,
  CardItem,
  Body,
  Item,
  Input,
  ListItem,
  Left,
  Right,
  Radio,
  Picker,
  List,
  Icon,
  Switch,
} from 'native-base';
import ColorPalette from 'react-native-color-palette';

import {themesAvaliable, setColor, getColor} from '../services/themeServices';

function themesScenes(props) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [color, setColorState] = useState(themesAvaliable()[0]);

  useEffect(() => {
    getColor().then(data => {
      setColorState(data);
    });
  }, []);

  const salvar = async () => {
    setColor(color);
    props.navigation.goBack();
  };

  const selectColor = async color => {
    setColorState(color);
    setModalOpen(false);
  };

  return (
    <Content>
      <Form>
        <Modal
          animationType="slide"
          transparent={false}
          visible={isModalOpen}
          onRequestClose={() => {
            setModalOpen(false);
          }}>
          <Content style={{marginTop: 22}}>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <ColorPalette
                onChange={selectColor}
                defaultColor={color}
                colors={themesAvaliable()}
                title={'Escolha a cor primária'}
              />
            </View>
          </Content>
        </Modal>

        <ListItem icon>
          <Left>
            <Button>
              <Icon type="FontAwesome" name="image" />
            </Button>
          </Left>
          <Body>
            <Text>Logotipo</Text>
          </Body>
          <Right>
            <Text>Padrão</Text>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem
          icon
          onPress={() => {
            setModalOpen(true);
          }}>
          <Left>
            <Button>
              <Icon type="Ionicons" name="ios-color-fill" />
            </Button>
          </Left>
          <Body>
            <Text>Cor primária</Text>
          </Body>
          <Right>
            <Text style={{color: color}}>{color}</Text>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>

        <Button
          style={{marginTop: 80}}
          primary
          block
          onPress={async () => salvar()}>
          <Text> Salvar e aplicar</Text>
        </Button>
      </Form>
    </Content>
  );
}

const styles = StyleSheet.create({
  buttonTouchable: {
    padding: 16,
  },
});

export default themesScenes;
