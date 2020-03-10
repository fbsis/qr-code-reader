import React, {Component} from 'react';
import {
  Container,
  Content,
  ListItem,
  Text,
  Separator,
  Right,
  Left,
  Card,
  CardItem,
  Body,
} from 'native-base';

class rastreabilidadeDetailsScenes extends Component {
  renderInfos = () => {};

  render() {
    const data = this.props.route.params;
    const tracking = this.props.route.params.tracking;
    let trackInfo = [];

    tracking.map((value, key) => {
      trackInfo[key] = [];
      Object.keys(value).map((value1, key1) => {
        trackInfo[key][value1] = tracking[key][value1];
      });
    });

    return (
      <Container>
        <Content>
          {Object.keys(this.props.route.params).map(
            (value, key) =>
              typeof data[value] === 'string' &&
              value !== 'id' &&
              value !== 'qrCode' && (
                <ListItem key={key}>
                  <Left>
                    <Text>{value}</Text>
                  </Left>
                  <Text>{data[value]}</Text>
                </ListItem>
              ),
          )}

          {trackInfo && trackInfo.length > 0 && (
            <Separator bordered>
              <Text>Tracking</Text>
            </Separator>
          )}

          {trackInfo.map((value, key) => (
            <Card key={key}>
              <CardItem>
                <Body>
                  {Object.keys(value).map((value1, key1) => {
                    return (
                      <Text key={key1}>
                        {value1}: {value[value1]}
                      </Text>
                    );
                  })}
                </Body>
              </CardItem>
            </Card>
          ))}
        </Content>
      </Container>
    );
  }
}

export default rastreabilidadeDetailsScenes;
