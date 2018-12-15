import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import store from './src/store';
import Navigator from './src/navigation';

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json'
});

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
