import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import CompanyCard from '../../components/CompanyCard/CompanyCard';
import styles from './styles';

export default class SuppliersScreen extends Component {
  static navigationOptions = {
    title: 'Suppliers',
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={[styles.button]}>
            <Ionicons
              style={styles.itemIcon}
              name="ios-mail"
              size={14}
              color="#900"
            />
            <Text>Overzicht</Text>
          </View>
          <View style={[styles.button,
          { borderLeftWidth: 1, borderLeftColor: '#dcdcdc' }]}
          >
            <Ionicons
              style={styles.itemIcon}
              name="ios-mail"
              size={14}
              color="#900"
            />
            <Text>Map</Text>
          </View>
        </View>
        <CompanyCard />
      </View>
    );
  }
}
