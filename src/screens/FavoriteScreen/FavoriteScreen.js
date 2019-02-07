import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View,
} from 'react-native';
import { connect } from 'react-redux';
import { actions } from '../../models/favourite';
import { setItemIndex } from '../../models/map';

import MainComponent from '../../components/DetailsComponent/MainComponent';

class FavoriteScreen extends Component {
  static navigationOptions = {
    title: 'Favourite',
  }

  async componentDidMount() {
    const { setFavouriteItems } = this.props;
    setFavouriteItems();
  }


  render() {
    const { items, currentItemIndex } = this.props;
    return (
      <MainComponent
        items={items}
        // handleLoadMore={this.handleLoadMore}
        setItemIndex={setItemIndex}
        currentItemIndex={currentItemIndex}
      />
    );
  }
}

const mapStateToProps = state => ({
  items: state.favourite.items,
  currentItemIndex: state.map.currentItemIndex,
});

export default connect(mapStateToProps, { ...actions, setItemIndex })(FavoriteScreen);
