import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import styles from './styles';
import Map from '../Map/Map';
import HorizontalSlider from '../HorizontalSlider/HorizontalSlider';
import SearchHeader from '../SearchHeader/SearchHeader';

class MapComponent extends Component {
  static navigationOptions = {
    title: 'Leveranciers',
  }

  render() {
    const {
      singleItemSelected,
      changeComponent, items, setItemIndex, currentItemIndex,
    } = this.props;

    return (
      <View style={styles.container}>
        <SearchHeader
          mainScreen="SuppliersScreen"
          changeComponent={changeComponent}
        />
        <Map
          singleItemSelected={singleItemSelected}
          data={singleItemSelected || items}
          singleItemData={1}
          setItemIndex={setItemIndex}
        />
        <HorizontalSlider
          isHorizontal
          singleItemSelected={singleItemSelected}
          dataType="suppliers"
          data={items}
          currentItemIndex={currentItemIndex}
        />
      </View>
    );
  }
}


// SearchScreen.propTypes = {
//     navigation: PropTypes.object.isRequired,
// };
export default MapComponent;
