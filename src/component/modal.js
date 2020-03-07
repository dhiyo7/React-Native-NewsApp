//import liraries
import React, { Component } from 'react';
import { Dimensions, WebView, Modal, Share } from 'react-native';
import {Container, Header, Content, Body, Right, Left, Icon, Title, Button} from 'native-base'

// create a component
class Modal extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Modal</Text>
            </View>
        );
    }
}
 
//make this component available to the app
export default Modal;
