import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View, TouchableHighlight,
} from 'react-native';
import Map from '../../components/Map/Map';

class NewScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home!',
  };


  componentWillUnmount() {
    console.log('componentWillUnmount - NewScreens');
  }

  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <TouchableHighlight
        onPress={() => navigate('AccountScreen')}
      >
        <Text>Push</Text>
      </TouchableHighlight>
      //   <Map
      //     singleItemSelected={1}
      //     data={[]}
      //     singleItemData={1}
      //   // setItemIndex={setItemIndex}
      //   />
    );
  }
}

export default NewScreen;
