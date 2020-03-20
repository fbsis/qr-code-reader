import React, {Component, useEffect, useState} from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from 'native-base';

export default Head = props => {
  const backAction = () => {
    if (props.isInternal) {
      props.navigation.push('Home');
    } else {
      props.navigation.goBack();
    }
  };

  const isShowButton = () => {
    if (props.title == 'Ceptis') {
      return false;
    }
    if (props.isInternal) {
      return true;
    } else {
      if (props.navigation.canGoBack()) {
        return true;
      }
    }
  };

  return (
    <Header>
      {isShowButton() && (
        <Left>
          <Button transparent onPress={() => backAction()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
      )}

      <Body>
        <Title>{props.title}</Title>
      </Body>

      {props.tools && (
        <Right>
          <Button
            transparent
            onPress={() => props.navigation.push('configuracao')}>
            <Icon name="menu" />
          </Button>
        </Right>
      )}
    </Header>
  );
};
