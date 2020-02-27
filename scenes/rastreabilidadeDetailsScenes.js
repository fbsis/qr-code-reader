import React, {Component} from 'react';
import {
  Container,
  Content,
  ListItem,
  Text,
  Separator,
  Right,
  Left,
} from 'native-base';

class rastreabilidadeDetailsScenes extends Component {
  render() {
    const data = this.props.route.params;

    console.log(Object.keys(data), data);

    return (
      <Container>
        <Content>
          {Object.keys(this.props.route.params).map(
            (value, key) =>
              typeof data[value] === 'string' && (
                <ListItem key={key}>
                  <Left>
                    <Text>
                      {value}
                    </Text>
                  </Left>
                  <Text>{data[value]}</Text>
                </ListItem>
              ),
          )}
          <Separator bordered>
            <Text>History</Text>
          </Separator>
          <ListItem>
            <Left>
              <Text>Lee Allen</Text>
            </Left>
            <Right>
              <Text>Lee Allen</Text>
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Lee Allen</Text>
            </Left>
            <Right>
              <Text>Lee Allen</Text>
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

export default rastreabilidadeDetailsScenes;
