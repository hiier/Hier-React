import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Hier' />
        <Greeting name='Hier' />
        <Greeting name='Hier' />
        <Greeting name='Hier' />
      </View>
    );
  }
}

AppRegistry.registerComponent('Hier', () => HelloWorldApp);








