import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View,
} from 'react-native';
import { connect } from 'react-redux';
import { actions } from '../../models/suppliers';

class SearchScreen extends Component {
  static navigationOptions = {
    title: 'Search',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Search Screen!</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  suppliersList: 22,
});

// SearchScreen.propTypes = {
//     navigation: PropTypes.object.isRequired,
// };
export default connect(mapStateToProps, actions)(SearchScreen);

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
