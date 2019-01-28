import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View, FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import CompanyCard from '../../components/CompanyCard/CompanyCard';
import { actions } from '../../models/suppliers';

import styles from './styles';

class SuppliersScreen extends Component {
  static navigationOptions = {
    title: 'Suppliers',
  }

  state = {
    type: 'b_name',
    page: 1,
  }

  componentDidMount() {
    const { setSuppliersList } = this.props;
    const { searchVal, type, page } = this.state;
    setSuppliersList(searchVal, type, page);
  }

  handleLoadMore = () => {
    const { type, page, searchVal } = this.state;
    const { loadMoreItems, suppliersList: { items, count } } = this.props;
    if (items.length < count) {
      this.setState(
        {
          page: page + 1,
          type,
        },
        () => loadMoreItems(searchVal, type, page + 1),
      );
    }
  }

  render() {
    const { suppliersList: { items } } = this.props;
    console.log('this.state.page', this.state.page);

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
        <FlatList
          data={items}
          ItemSeparatorComponent={() => <View style={{ borderTopWidth: 1, borderTopColor: 'black' }} />}
          renderItem={({ item }) => (
            <CompanyCard item={item} />
          )}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0.01}
        />

      </View>
    );
  }
}

const mapStateToProps = state => ({
  suppliersList: state.suppliers.suppliersList,
});

// SearchScreen.propTypes = {
//     navigation: PropTypes.object.isRequired,
// };
export default connect(mapStateToProps, actions)(SuppliersScreen);
