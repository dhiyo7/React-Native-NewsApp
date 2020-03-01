import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Left,
  Right,
  Body,
  Title,
} from 'native-base';
import Tab1 from './tabs/tabOne';
import Tab2 from './tabs/tabTwo';
import Tab3 from './tabs/tabThree';
export default class TabsExample extends Component {
  render() {
    return (
      <Container style={{backgroundColor: '#2ecc71'}}>
        <Header
          style={{backgroundColor: '#2ecc71'}}
          androidStatusBarColor="#2ecc71">
          <Left />
          <Body>
            <Title>Plug & Plant</Title>
          </Body>
          <Right />
        </Header>
        <Tabs>
          <Tab
            tabStyle={{backgroundColor: '#2ecc71'}}
            activeTabStyle={{backgroundColor: '#2ecc71'}}
            activeTextStyle={{color: '#fff'}} textStyle={{color:'white'}}
            heading="News">
            <Tab1/>
          </Tab>
          <Tab
            tabStyle={{backgroundColor: '#2ecc71'}}
            activeTabStyle={{backgroundColor: '#2ecc71'}}
            activeTextStyle={{color: '#fff'}} textStyle={{color:'white'}}
            heading="Olahraga">
            <Tab2 />
          </Tab>
          <Tab
            tabStyle={{backgroundColor: '#2ecc71'}}
            activeTabStyle={{backgroundColor: '#2ecc71'}}
            activeTextStyle={{color: '#fff'}} textStyle={{color:'white'}}
            heading="Teknologi">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
