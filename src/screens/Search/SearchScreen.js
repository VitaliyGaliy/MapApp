import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View,
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

import { actions } from '../../models/suppliers';
import Map from '../../components/Map/Map';
import HorizontalSlider from '../../components/HorizontalSlider/HorizontalSlider';

class SearchScreen extends Component {
  static navigationOptions = {
    title: 'Search',
  }

  render() {
    return (
      <View style={styles.container}>
        <Map />
        <HorizontalSlider />

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
