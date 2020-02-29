import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';
import {Alert} from 'react-native';

import {getArticles} from '../../services/News';

export default class ListThumbnailExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null,
    };
  }

  componentDidMount() {
    getArticles().then(
      data => {
        this.setState({
          isLoading: false,
          data: data,
        });
      },
      error => {
        Alert.alert('Error', 'Ada Yang Salah! ');
      },
    );
  }

  render() {
      console.log(this.state.data);
      
    return (
      <Container>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={{
                    uri:
                      'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
                  }}
                />
              </Left>
              <Body>
                <Text>Title</Text>
                <Text note numberOfLines={2}>
                  Its time to build a difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={{
                    uri:
                      'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
                  }}
                />
              </Left>
              <Body>
                <Text>Title</Text>
                <Text note numberOfLines={2}>
                  Its time to build a difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={{
                    uri:
                      'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
                  }}
                />
              </Left>
              <Body>
                <Text>Title</Text>
                <Text note numberOfLines={2}>
                  Its time to build a difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={{
                    uri:
                      'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
                  }}
                />
              </Left>
              <Body>
                <Text>Title</Text>
                <Text note numberOfLines={2}>
                  Its time to build a difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={{
                    uri:
                      'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
                  }}
                />
              </Left>
              <Body>
                <Text>Title</Text>
                <Text note numberOfLines={2}>
                  Its time to build a difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
