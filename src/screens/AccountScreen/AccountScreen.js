import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View,
} from 'react-native';

class AccountScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home!',
  };


  render() {
    return (
      <Text>AccountScreen</Text>
    );
  }
}

export default AccountScreen;
