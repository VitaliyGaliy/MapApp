import React, { Component } from 'react';
import {
  View, FlatList, AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions } from '../../models/suppliers';
import { setItemIndex } from '../../models/map';
import MainComponent from '../../components/DetailsComponent/MainComponent';


class SuppliersScreen extends Component {
  static navigationOptions = {
    title: 'Suppliers',
  }

  state = {
    type: 'b_name',
    page: 1,
  }

  async componentDidMount() {
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

  keyExtractor = item => item.id;

  render() {
    const { suppliersList: { items }, setItemIndex, currentItemIndex } = this.props;

    return (
      <MainComponent
        items={items}
        handleLoadMore={this.handleLoadMore}
        setItemIndex={setItemIndex}
        currentItemIndex={currentItemIndex}
      />
    );
  }
}

const mapStateToProps = state => ({
  suppliersList: state.suppliers.suppliersList,
  currentItemIndex: state.map.currentItemIndex,
});

// SuppliersScreen.defaultProps = {
//   count: 0,
// };

SuppliersScreen.propTypes = {
  setItemIndex: PropTypes.func.isRequired,
  currentItemIndex: PropTypes.number,
  loadMoreItems: PropTypes.func.isRequired,
  suppliersList: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, { ...actions, setItemIndex })(SuppliersScreen);
