import React, { Component } from 'react';
import {
  View, FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import CompanyCard from '../../components/CompanyCard/CompanyCard';
import { actions } from '../../models/suppliers';
import SearchHeader from '../../components/SearchHeader/SearchHeader';

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

  keyExtractor = (item, index) => item.id;

  render() {
    const { suppliersList: { items }, navigation: { navigate } } = this.props;

    return (
      <View style={styles.container}>
        <SearchHeader
          map="DetailsScreen"
          navigate={navigate}
        />
        <FlatList
          data={items}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={() => <View style={{ borderTopWidth: 1, borderTopColor: 'black' }} />}
          renderItem={({ item }) => (
            <CompanyCard
              item={item}
              handler={() => navigate('DetailsScreen', {
                itemId: [item],
              })}
            />
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
