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

import {getColor, themesAvaliable} from './../../services/themeServices';

export default function Head(props) {
  const [headerColor, SetheaderColor] = useState(themesAvaliable()[0]);

  useEffect(() => {
    getColor().then(data => {
      SetheaderColor(data);
    });
  });

  const backAction = () => {
    if (props.isInternal) {
      props.navigation.navigate('Home');
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
    <Header
      style={{backgroundColor: headerColor}}
      androidStatusBarColor={headerColor}>
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
}
