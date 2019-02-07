import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity,
} from 'react-native';
import styles from './styles';
import CustomIcon from '../../styles/CustomIcon';

class SearchHeader extends Component {
  static navigationOptions = {
    title: 'Suppliers',
  }


  render() {
    const { changeComponent } = this.props;

    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => changeComponent('list')}
        >
          <CustomIcon
            style={styles.itemIcon}
            name="Overzicht"
            color="#900"
          />
          <Text>Overzicht</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button,
          { borderLeftWidth: 1, borderLeftColor: '#dcdcdc' }]}
          onPress={() => changeComponent('map')}
        >
          <CustomIcon
            style={styles.itemIcon}
            name="map-top-of-app"
          />
          <Text>Map</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SearchHeader;
