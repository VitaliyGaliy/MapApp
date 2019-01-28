import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View,
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

import { actions } from '../../models/search';
import Map from '../../components/Map/Map';
import HorizontalSlider from '../../components/HorizontalSlider/HorizontalSlider';

class SearchResult extends Component {
  static navigationOptions = {
    title: 'SearchResult',
  }

  render() {
    const { searchList: { items } } = this.props;
    return (
      <View style={styles.container}>
        <Map items={items} />
        <HorizontalSlider items={items} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  searchList: state.search.searchList,
});

// SearchResult.propTypes = {
//     navigation: PropTypes.object.isRequired,
// };
export default connect(mapStateToProps, actions)(SearchResult);
