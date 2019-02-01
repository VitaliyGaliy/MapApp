import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import styles from './styles';
import CustomIcon from '../../styles/CustomIcon';

class SearchHeader extends Component {
  static navigationOptions = {
    title: 'Suppliers',
  }


  render() {
    const { navigate, map, mainScreen } = this.props;

    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => navigate(mainScreen)}
        >
          <Ionicons
            style={styles.itemIcon}
            name="ios-mail"
            size={14}
            color="#900"
          />
          <Text>Overzicht</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button,
            { borderLeftWidth: 1, borderLeftColor: '#dcdcdc' }]}
          onPress={() => navigate(map)}
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
