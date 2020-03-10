import React, {Component, useState} from 'react';

import {StyleSheet, Root, Toast, Alert} from 'react-native';

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
} from 'native-base';

import {
  validateAndGetJsonUrl,
  setDBInformation,
} from '../services/trackingCodeServices';

function themesScenes(props) {
  const salvar = async () => {};

  return (
    <Content padder>
      <Card>
        <Form>
          <Item regular>
            <Input placeholder="Logotipo" />
          </Item>
          <Item regular>
            <Input placeholder="Cor Primária" bordered />
          </Item>
          <Item regular>
            <Input placeholder="Cores Secundárias" bordered regular />
          </Item>
          <Button primary block onPress={async () => salvar()}>
            <Text>Aplicar</Text>
          </Button>
        </Form>
      </Card>
    </Content>
  );
}

const styles = StyleSheet.create({
  buttonTouchable: {
    padding: 16,
  },
});

export default themesScenes;
