import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import SearchHeader from '../SearchHeader/SearchHeader';
import Slider from '../ScrollList';

import styles from './styles';


class ListComponent extends Component {
  static navigationOptions = {
    title: 'Suppliers',
  }

  keyExtractor = item => item.id;

  render() {
    const {
      changeComponent, items, handleLoadMore,
    } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <SearchHeader
          changeComponent={changeComponent}
        />
        {
          items
          && (
            <Slider
              items={items}
              handleLoadMore={handleLoadMore}
            />
          )
        }
      </View>
    );
  }
}


// ListComponent.propTypes = {
//     navigation: PropTypes.object.isRequired,
// };
export default ListComponent;
