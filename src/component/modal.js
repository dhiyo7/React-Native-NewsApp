//import liraries
import React, {Component} from 'react';
import {Dimensions, Modal, Share} from 'react-native';
import {WebView} from 'react-native-webview';
import {
  Container,
  Header,
  Content,
  Body,
  Right,
  Left,
  Icon,
  Title,
  Button,
} from 'native-base';

const webviewHeight = Dimensions.get('window').height - 56;
// create a component
class ModalComponent extends Component {
  constructor(props) {
    super(props);
  }

  handleShare = () => {
    const {url, title} = this.props.articleData;
    message = `${title}\n\n Baca Selengkapnya @ ${url}\n\n di Bagikan melalui News App`;
    return Share.share(
      {title, message, url: message},
      {dialogTitle: `Bagikan ${title}`},
    );
  };

  handleClose = () => {
    return this.props.onClose();
  };

  render() {
    const {showModal, articleData} = this.props;
    const {url} = articleData;
    if (url != undefined) {
      return (
        <Modal
          animationType="slide"
          transparent
          visible={showModal}
          onRequestClose={this.handleClose}>
          <Container
            style={{margin: 15, marginBottom: 0, backgroundColor: '#fff'}}>
            <Header style={{backgroundColor: '#2ecc71'}}>
              <Left>
                <Button onPress={this.handleClose} transparent>
                  <Icon
                    name="close"
                    style={{color: 'white', fontSize: 12}}></Icon>
                </Button>
              </Left>
              <Body>
                <Title
                  children={articleData.title}
                  style={{color: 'white'}}></Title>
              </Body>
              <Right>
                <Button onPress={this.handleShare} transparent>
                  <Icon
                    name="share"
                    style={{color: 'white', fontSize: 12}}></Icon>
                </Button>
              </Right>
            </Header>
            <Content contentContainerStyle={{height: webviewHeight}}>
              <WebView
                source={{uri: url}}
                style={{width: '100%', height: Dimensions.get("window").height, flex: 1}}
                onError={this.handleClose}
                startInLoadingState
                scalesPageToFit
                decelerationRate="normal"
                automaticallyAdjustContentInsets="false"
                useWebKit={true}
                scrollEnabled="true"
                javaScriptEnabled
                domStorageEnabled
              />
            </Content>
          </Container>
        </Modal>
      );
    } else {
      return null;
    }
  }
}

//make this component available to the app
export default ModalComponent;
