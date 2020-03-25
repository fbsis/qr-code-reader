import React, {Component, useState, useEffect} from 'react';

import {StyleSheet, Root, Toast, Alert, Modal, View, Image} from 'react-native';

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
import ImagePicker from 'react-native-image-picker';

import {
  themesAvaliable,
  setColor,
  getColor,
  getLogo,
  SetLogo,
} from '../services/themeServices';

function themesScenes(props) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [color, setColorState] = useState(themesAvaliable()[0]);
  const [image, setImageState] = useState(null);

  useEffect(() => {
    getColor().then(data => {
      setColorState(data);
    });
    getLogo().then(data => {
      setImageState(data);
    });
  }, []);

  const salvar = async () => {
    setColor(color);
    SetLogo(image);
    props.navigation.navigate('Home', {reload: image});
  };

  const selectColor = async color => {
    setColorState(color);
    setModalOpen(false);
  };

  const selectImage = () => {
    ImagePicker.launchImageLibrary({}, response => {
      //console.log('Response = ', response.uri);

      if (response.didCancel) {
        //console.log('User cancelled image picker');
      } else if (response.error) {
        //console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        //console.log('User tapped custom button: ', response.customButton);
      } else {
        setImageState(response.uri);
      }
    });
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

        <ListItem
          icon
          onPress={() => {
            selectImage();
          }}>
          <Left>
            <Button>
              <Icon type="FontAwesome" name="image" />
            </Button>
          </Left>
          <Body>
            <Text>Logotipo</Text>
          </Body>
          <Right>
            {image === null && <Text>Padrão</Text>}
            {image !== null && (
              <Image style={{width: 35, height: 35}} source={{uri: image}} />
              // <Image
              //   source={require(image)}
              // />
            )}

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
