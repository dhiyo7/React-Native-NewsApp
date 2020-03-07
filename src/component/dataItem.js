import React, {Component} from 'react';
import {
  ListItem,
  Left,
  Thumbnail,
  Body,
  Text,
  Right,
  Button,
  View,
} from 'native-base';
import TimeAgo from './time'

class DataItem extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }

  render() {
    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail
            square
            source={{
              uri:
                this.data.urlToImage != null
                  ? this.data.urlToImage
                  : 'https://seeba.se/wp-content/themes/consultix/images/no-image-found-360x260.png',
            }}
          />
        </Left>
        <Body>
          <Text numberOfLines={2}>{this.data.title}</Text>
          <Text note numberOfLines={2}>
            {this.data.description}
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 8,
              marginLeft: 0,
            }}>
              <Text note>{this.data.source.name}</Text>
              <TimeAgo time={this.data.publishedAt}/>

            </View>
        </Body>
        <Right>
          <Button transparent>
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
    );
  }
}
export default DataItem;
