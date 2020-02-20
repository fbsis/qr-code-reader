
import React, { Component, useEffect } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default Head = (props) => {

    useEffect(() => {
        console.log(props)
    });

    return (
        < Header >
            <Body>
                <Title>{props.title} </Title>
            </Body>
            <Right>
                <Button transparent>
                    <Icon type="MaterialCommunityIcons" name="theme-light-dark" />
                </Button></Right>
        </Header >)
}