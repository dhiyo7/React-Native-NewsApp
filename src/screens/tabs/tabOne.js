import React, {Component} from 'react';
import {Container, Content, List, Text} from 'native-base';
import {Alert, View, ActivityIndicator} from 'react-native';

import {getArticles} from '../../services/News';
import DataItem from '../../component/dataItem';
import Modal from '../../component/modal';

export default class ListThumbnailExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null,
      setModalVisible: false,
      modalArticleData: {},
    };
  }

  handleItemDataOnPress = (articleData) => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData,
    });
  };

  handleModalOnClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {}
    })
  };

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

    let view = this.state.isLoading ? (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
          animating={this.state.isLoading}
          color="#00f0ff"
        />
        <Text style={{marginTop: 10}} children="Silahkan Tunggu . . . " />
      </View>
    ) : (
      <List
        dataArray={this.state.data}
        renderRow={item => {
          return <DataItem onPress={this.handleItemDataOnPress} data={item} />;
        }}
      />
    );

    return (
      <Container>
        <Content style={{flex: 1}}>{view}</Content>
        <Modal
        showModal= {this.state.setModalVisible}
        articleData={this.state.modalArticleData}
        onClose={this.handleModalOnClose}  />
      </Container>
    );
  }
}
