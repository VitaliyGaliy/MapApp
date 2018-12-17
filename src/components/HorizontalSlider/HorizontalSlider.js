import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View, FlatList, Dimensions,
} from 'react-native';
import CompanyCard from '../CompanyCard/CompanyCard';
import styles from './styles';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

class SearchScreen extends Component {
  static navigationOptions = {
    title: 'Search',
  }

  render() {
    const { width } = Dimensions.get('window');
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          horizontal
          ItemSeparatorComponent={() => <View style={{ margin: -1 }} />}
          renderItem={({ item }) => <CompanyCard customWidth={width} />}
        />

      </View>
    );
  }
}
export default SearchScreen;
