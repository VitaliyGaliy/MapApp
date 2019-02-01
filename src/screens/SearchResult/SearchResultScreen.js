import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View,
} from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';
import { actions } from '../../models/search';
import Map from '../../components/Map/Map';
import HorizontalSlider from '../../components/HorizontalSlider/HorizontalSlider';

class SearchResultScreen extends Component {
  static navigationOptions = {
    title: 'Leveranciers',
  }

  render() {
    const {
      navigation: { navigate },
      navigation, searchList,
      setItemIndex, currentItemIndex,
    } = this.props;

    return (
      <View style={styles.container}>
        <SearchHeader
          mainScreen="SuppliersScreen"
          navigate={navigate}
        />
        <Map
          data={searchList}
          // singleItemData={singleItemData}
          setItemIndex={setItemIndex}
        />
        <HorizontalSlider
          dataType="suppliers"
          data={data}
          currentItemIndex={currentItemIndex}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  searchList: state.search.searchList.items,
  currentItemIndex: state.map.currentItemIndex,
});

// SearchScreen.propTypes = {
//     navigation: PropTypes.object.isRequired,
// };
export default connect(mapStateToProps, actions)(SearchResultScreen);
